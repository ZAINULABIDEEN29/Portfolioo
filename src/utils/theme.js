// src/utils/theme.js
export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  
  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
    
    if (themeToggle) themeToggle.checked = isDark;
    if (mobileThemeToggle) mobileThemeToggle.checked = isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      setTheme(themeToggle.checked);
    });
  }
  
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('change', () => {
      setTheme(mobileThemeToggle.checked);
    });
  }
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  } else if (savedTheme === 'light') {
    setTheme(false);
  }
}