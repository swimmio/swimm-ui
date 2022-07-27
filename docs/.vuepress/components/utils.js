const BASE_SPACING_SIZE_IN_PX = 8;

export function getCssVariable(name) {
  const style = window.getComputedStyle(document.body);
  return style.getPropertyValue(`--${name}`);
}

export function getSizeInPx(size) {
  return parseFloat(size, 10);
}

export function getSpacingSizeInEm(size) {
  return parseFloat(size, 10) / BASE_SPACING_SIZE_IN_PX;
}
