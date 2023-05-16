export default function goBackToTop() {
  const top = document.getElementById('top');
  top?.scrollIntoView({ behavior: 'smooth' });
}