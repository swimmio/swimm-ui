const BASE_SPACING_SIZE_IN_PX = 8;

export function getCssVariable(name) {
  const style = window.getComputedStyle(document.body);
  return style.getPropertyValue(`--${name}`);
}

export function getSizeInPx(size: string) {
  return parseFloat(size);
}

export function getSpacingSizeInEm(size: string) {
  return parseFloat(size) / BASE_SPACING_SIZE_IN_PX;
}
