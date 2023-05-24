export default function scrollSmoothly() {
  const top = document.querySelector('body');
  top?.scrollIntoView({ behavior: 'smooth' });
}