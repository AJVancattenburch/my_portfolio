import { onMounted } from 'vue';

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

export function preloadImage() {
  const images = document.querySelectorAll("img[data-src]");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      if (img instanceof HTMLImageElement) {
        img.src = img.dataset.src;
        img.classList.remove("lazy-load");

        observer.unobserve(img);
      }
    });
  }, options);

  images.forEach(img => observer.observe(img));
}

onMounted(() => {
  preloadImage();
});