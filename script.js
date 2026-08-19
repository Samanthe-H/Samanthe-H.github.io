const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

const systemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const savedTheme = localStorage.getItem('sai-hao-theme');
const initialTheme = savedTheme || systemTheme();

const setTheme = (theme) => {
  const dark = theme === 'dark';
  root.classList.toggle('dark-mode', dark);
  themeToggle?.setAttribute('aria-pressed', String(dark));
  themeToggle?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  if (themeIcon) themeIcon.textContent = dark ? '☼' : '☾';
  localStorage.setItem('sai-hao-theme', theme);
};

setTheme(initialTheme);
themeToggle?.addEventListener('click', () => setTheme(root.classList.contains('dark-mode') ? 'light' : 'dark'));

menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open menu');
}));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
