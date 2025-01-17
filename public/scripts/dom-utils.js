export function hideElement($el) {
  if ($el) {
    $el.classList.add('hidden');
    $el.setAttribute('aria-hidden', 'true');
  }
}

export function showElement($el) {
  if ($el) {
    $el.classList.remove('hidden');
    $el.removeAttribute('aria-hidden');
  }
}

export function toggleVisibleElement($el) {
  if ($el) {
    $el.classList.toggle('hidden');
    $el.toggleAttribute('aria-hidden');
  }
}

export function sortChildren($el, attribute, nFirstChildren) {
  const sorted = [...$el.children].sort(
    (a, b) =>
      parseInt(a.getAttribute(attribute)) - parseInt(b.getAttribute(attribute)),
  );
  nFirstChildren = nFirstChildren || sorted.length;
  const firstChildren = sorted.slice(0, nFirstChildren);
  $el.innerHTML = '';
  firstChildren.forEach((node) => $el.appendChild(node));
  setTimeout(() => {
    sorted.slice(nFirstChildren).forEach((node) => $el.appendChild(node));
  }, 0);
}

export function addClass($el, clazz) {
  if ($el) {
    $el.classList.add(clazz);
  }
}

export function removeClass($el, clazz) {
  if ($el) {
    $el.classList.remove(clazz);
  }
}

export function toggleClass($el, clazz) {
  if ($el) {
    $el.classList.toggle(clazz);
  }
}
