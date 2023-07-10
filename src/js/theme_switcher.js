function themeSwitching() {
  const switcher = document.querySelector('#dn');
  switcher.addEventListener('click', onThemeSwitcher);

  let activeTheme = localStorage.getItem('theme');
  if (activeTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  function onThemeSwitcher(event) {
    applyTheme();
  }

  function applyTheme() {
    const rootEl = document.documentElement;
    let dataTheme = rootEl.getAttribute('data-theme');
    let newTheme = dataTheme === 'light' ? 'dark' : 'light';
    rootEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
}
themeSwitching();
