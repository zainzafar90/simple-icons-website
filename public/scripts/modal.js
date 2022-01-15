const simpleIcons = require('simple-icons');
const icons = Object.values(simpleIcons);
const getRelativeLuminance = require('get-relative-luminance').default;

export default async function initModal(document, domUtils) {
  // Third party extensions
  const $modalTrigger = document.querySelector('.popup-trigger');
  const $popupModal = document.querySelector('.popup_modal');
  const $popupBody = document.querySelector('.popup-body');
  $modalTrigger.addEventListener('click', (e) => {
    domUtils.toggleVisibleElement($popupModal);
    e.stopPropagation();
  });

  // Detail view
  const $detailButtons = document.querySelectorAll('.view-button');
  const $detailModal = document.querySelector('.detail_modal');
  const $detailBody = document.querySelector('.detail-body');
  $detailButtons.forEach((e) =>
    e.addEventListener('click', (e) => {
      domUtils.toggleVisibleElement($detailModal);
      const index = e.target.getAttribute('index');
      const icon = icons[index];
      const luminance = getRelativeLuminance(`#${icon.hex}`);

      const $iconHex = $detailBody.querySelector('#icon-hex');
      domUtils.addClass(
        $iconHex,
        luminance < 0.4 ? 'contrast-light' : 'contrast-dark',
      );
      if (luminance > 0.95) domUtils.addClass($iconHex, 'border-light');
      if (luminance < 0.02) domUtils.addClass($iconHex, 'border-dark');
      $detailBody
        .querySelector('#icon-hex')
        .setAttribute('style', `background-color: #${icon.hex}`);
      $iconHex.innerHTML = icon.hex;
      $detailBody.querySelector('#icon_container').innerHTML = icon.svg;
      //  $detailBody.querySelector('#icon-title').innerHTML = icon.title;
      $detailBody
        .querySelector('#icon-source')
        .setAttribute('href', icon.source);
      if (icon.guidelines) {
        $detailBody.querySelector('#icon-guidelines').innerHTML =
          icon.guidelines;
        domUtils.showElement($detailBody.querySelector('#icon-guidelines'));
      }

      if (icon.license) {
        $detailBody
          .querySelector('#icon-license')
          .setAttribute('href', icon.license.url);
        $detailBody.querySelector('#icon-license').innerHTML =
          icon.license.type;
      }

      $detailBody
        .querySelector('#icon-guidelines')
        .setAttribute('href', `./icons/${icon.slug}.svg`)
        .setAttribute('data-icon', icon.slug);
      e.stopPropagation();
    }),
  );

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      domUtils.hideElement($popupModal);
      domUtils.hideElement($detailModal);
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.composedPath().includes($popupBody)) {
      domUtils.hideElement($popupModal);
      domUtils.hideElement($detailModal);
    }
  });
}
