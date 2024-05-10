import { computed, ref } from 'vue';
import navLinks from '../constants/NavLinks';
import { logger } from '../utils/Logger';

const convertRGB = (color) => {
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return { r, g, b };
};

export function getContrastingColor(color) {
  const toHex = color.replace("#", "");

  const { r, g, b } = convertRGB(toHex);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
}

const activeLinkId = ref(null);
const foundLink = computed(() => {
  return navLinks.find(link => link.id === activeLinkId.value)
})

export async function scrollTo(id) {
  try {
    let scrollElem = document.getElementById(id);
    if (!scrollElem) {
      throw new Error(`Element with ref ${id} not found.`);
    }
    activeLinkId.value = id;
    let topOffsetY = scrollElem.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: topOffsetY, behavior: 'smooth' });
    logger.log(`Scrolled to HTMLElement:`, scrollElem);
    logger.log(`ScrollId: '${scrollElem.id}' matches NavLinkId: '${foundLink.value ? foundLink.value.id : ''}'`);
  } catch (error) {
    logger.error(error.message);
  }
}