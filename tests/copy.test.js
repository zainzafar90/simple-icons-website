const fs = require('fs');
const path = require('path');

const {
  document,
  newElementMock,
  newEventMock,
  window,
} = require('./mocks/dom.mock.js');
const { navigator } = require('./mocks/navigator.mock.js');
const { fetch, newFetchTextMock } = require('./mocks/fetch.mock.js');

const initCopyButtons = require('../public/scripts/copy.js').default;

describe('Copy', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    document.__resetAllMocks();
    navigator.__resetAllMocks();
  });

  it('gets the #copy-input button', () => {
    initCopyButtons(document, navigator, fetch);
    expect(document.getElementById).toHaveBeenCalledWith('copy-input');
  });

  it('gets grid item color buttons', () => {
    const eventListeners = new Map();
    const $colorButtons = [
      newElementMock('color button 1', { innerHTML: '#000FFF' }),
      newElementMock('color button 2', { innerHTML: '#FFF000' }),
    ];

    for (const $colorButton of $colorButtons) {
      const buttonEventListeners = new Map();
      eventListeners.set($colorButton, buttonEventListeners);
      $colorButton.addEventListener.mockImplementation((name, fn) => {
        buttonEventListeners.set(name, fn);
      });
    }

    document.querySelectorAll.mockImplementation((query) => {
      if (query === '.copy-color') {
        return $colorButtons;
      }

      return [];
    });

    initCopyButtons(document, navigator, fetch);
    jest.runAllTimers();

    for (const $colorButton of $colorButtons) {
      const buttonEventListeners = eventListeners.get($colorButton);

      expect($colorButton.removeAttribute).toHaveBeenCalledWith('disabled');
      expect($colorButton.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );

      const clickListener = buttonEventListeners.get('click');
      const event = newEventMock({ target: $colorButton });
      clickListener(event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect($colorButton.classList.add).toHaveBeenCalledWith('copied');
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        $colorButton.innerHTML,
      );
    }
  });

  it('gets grid item copy SVG source buttons', async () => {
    const simpleIconsIconPath = path.resolve(
      __dirname,
      '..',
      'node_modules',
      'simple-icons',
      'icons',
      'simpleicons.svg',
    );
    const rawSvg = fs.readFileSync(simpleIconsIconPath, 'utf-8');
    const iconUrl = 'icons/simpleicons.svg';

    const eventListeners = new Map();
    const $svgButtons = [
      newElementMock('preview button 1', { parentNode: true }),
      newElementMock('preview button 2', { parentNode: true }),
    ];

    for (const $svgButton of $svgButtons) {
      const buttonEventListeners = new Map();
      eventListeners.set($svgButton, buttonEventListeners);
      $svgButton.addEventListener.mockImplementation((name, fn) => {
        buttonEventListeners.set(name, fn);
      });
    }

    document.querySelectorAll.mockImplementation((query) => {
      if (query === '.copy-svg') {
        return $svgButtons;
      }

      return [];
    });

    const fetchMock = newFetchTextMock(rawSvg);
    initCopyButtons(document, navigator, fetchMock);
    jest.runAllTimers();

    for (const $svgButton of $svgButtons) {
      const buttonEventListeners = eventListeners.get($svgButton);

      const $img = newElementMock('img');
      $img.getAttribute.mockReturnValue(iconUrl);
      $svgButton.querySelector.mockReturnValue($img);

      expect($svgButton.removeAttribute).toHaveBeenCalledWith('disabled');
      expect($svgButton.addEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );

      const clickListener = buttonEventListeners.get('click');
      const event = newEventMock({ target: $svgButton });
      await clickListener(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(iconUrl);
      expect($svgButton.classList.add).toHaveBeenCalledWith('copied');
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(rawSvg);
    }
  });

  afterAll(() => {
    jest.useFakeTimers();
  });
});
