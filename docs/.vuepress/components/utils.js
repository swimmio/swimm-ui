export function getCssVariable(name) {
  const style = window.getComputedStyle(document.body);
  return style.getPropertyValue(`--${name}`);
}

export function getSizeInPx(size) {
  return parseFloat(size, 10);
}
