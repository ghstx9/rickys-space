const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}
