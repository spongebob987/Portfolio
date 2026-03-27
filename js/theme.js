// Theme Toggle Script
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    html.classList.add('light-mode');
    updateThemeIcon(true);
  } else {
    html.classList.remove('light-mode');
    updateThemeIcon(false);
  }

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('light-mode');
      const isLight = html.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (isLight) {
      icon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Basculer en mode sombre';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Basculer en mode clair';
    }
  }
});
