import '../stylesheet.css';

import * as domUtils from './dom-utils.js';
import newStorage from './storage.js';

import initOrdering from './ordering.js';
import initDownloadType from './download-type.js';
import initSearch from './search.js';

document.body.classList.remove('no-js');

if (!document.body.classList.contains('removed')) {
  const storage = newStorage(localStorage);
  const orderingControls = initOrdering(window, document, storage, domUtils);

  async function detachedInitColorScheme() {
    const { default: initColorScheme } = await import('./color-scheme.js');
    initColorScheme(document, storage);
  }

  async function detachedInitCopyButtons() {
    const { default: initCopyButtons } = await import('./copy.js');
    initCopyButtons(document, navigator, fetch);
  }

  async function detachedInitSearch() {
    const { default: initSearch } = await import('./search.js');
    initSearch(window.history, document, orderingControls, domUtils);
  }

  async function detachedInitDownloadType() {
    const { default: initDownloadType } = await import('./download-type.js');
    initDownloadType(document, storage);
  }

  async function detachedInitModal() {
    const { default: initModal } = await import('./modal.js');
    initModal(document, domUtils);
  }

  async function detachedInitLayout() {
    const { default: initlayout } = await import('./layout.js');
    initlayout(document, storage);
  }

  detachedInitColorScheme();
  detachedInitCopyButtons();
  detachedInitSearch();
  detachedInitDownloadType();
  detachedInitModal();
  detachedInitLayout();
}
