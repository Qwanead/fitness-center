export default () => {
  const toBottom = document.querySelector('.to-bottom');

  if (!toBottom) return;

  const targetId = toBottom.getAttribute('href');
  const target = document.querySelector(targetId);

  toBottom.addEventListener('click', (e) => {
    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
}
