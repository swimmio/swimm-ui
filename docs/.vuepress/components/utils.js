const REM_SIZE = 8;

export function getCssVariable(name) {
  const style = window.getComputedStyle(document.body);
  return style.getPropertyValue(`--${name}`);
}

export function getSizeInPx(size) {
  return parseFloat(size, 10);
}

export function getSizeInRem(size) {
  return parseFloat(size, 10) / REM_SIZE;
}
