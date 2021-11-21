const {
  document,
  newElementMock,
  newEventMock,
} = require('./mocks/dom.mock.js');
const { domUtils } = require('./mocks/dom-utils.mock.js');

const initModal = require('../public/scripts/modal.js').default;

describe('Extensions modal', () => {
  let eventListeners = new Map();

  beforeEach(() => {
    document.__resetAllMocks();
    domUtils.__resetAllMocks();
    eventListeners = new Map();
  });

  it('clicks the menu button for 3rd party extensions', () => {
    const $menuButton = newElementMock('.popup-trigger');
    $menuButton.addEventListener.mockImplementation((name, fn) => {
      eventListeners.set(name, fn);
    });

    document.querySelector.mockImplementation((query) =>
      query === '.popup-trigger' ? $menuButton : newElementMock(query),
    );

    initModal(document, domUtils);

    const event = newEventMock();
    eventListeners.get('click')(event);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    expect(domUtils.toggleVisibleElement).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["pressing 'Escape'", 'keyup', { key: 'Escape' }],
    ['clicking outside the modal', 'click', { path: [] }],
  ])('closes the extensions modal by %s', (msg, event, eventParam) => {
    document.addEventListener.mockImplementation((name, fn) => {
      eventListeners.set(name, fn);
    });

    initModal(document, domUtils);

    eventListeners.get(event)(newEventMock(eventParam));
    expect(domUtils.hideElement).toHaveBeenCalledTimes(1);
  });
});