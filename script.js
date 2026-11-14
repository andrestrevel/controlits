const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', () => {
  const opening = !menu.classList.contains('is-open');
  menu.classList.toggle('is-open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  document.body.style.overflow = opening ? 'hidden' : '';
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const filterButtons = [...document.querySelectorAll('.filter-button')];
const brandCards = [...document.querySelectorAll('.brand-card')];

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    brandCards.forEach((card) => {
      card.hidden = !(filter === 'all' || card.dataset.category === filter);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
