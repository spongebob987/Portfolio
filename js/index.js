document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuBtn?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks?.classList.remove('open')));

  const phrase = 'Futur administrateur systèmes et réseaux, orienté performance et cybersécurité.';
  const target = document.getElementById('typing-text');
  let i = 0;
  (function type() {
    if (!target) return;
    if (i < phrase.length) {
      target.textContent += phrase[i++];
      setTimeout(type, 30);
    }
  })();

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const reveal = document.querySelector('.reveal');
  setTimeout(() => reveal?.classList.add('visible'), 150);
});
