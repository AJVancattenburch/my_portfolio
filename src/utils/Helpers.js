export function isMobile() {
  return window.innerWidth < 768
}

const convertRGB = (color) => {
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return { r, g, b };
}

export function getContrastingColor(color) {
  const toHex = color.replace("#", "");

  const { r, g, b } = convertRGB(toHex);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
}