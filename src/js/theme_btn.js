

export default function fetchTheme() {
  const toggle = document.querySelector('.dn');
  const initialState = localStorage.getItem('toggleState') === 'true';
  toggle.checked = initialState;
  toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);
  });
}
