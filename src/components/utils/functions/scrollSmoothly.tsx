export default function scrollSmoothly() {
  const top = document.getElementById('header-top');
  top?.scrollIntoView({ behavior: 'smooth' });
}