// OBTAIN ELEMENTS
const MENU_TOGGLE = document.getElementById('menu-hamburguer');
const HEADER_BUTTONS = document.getElementById('header-buttons');

// CLICK AT HAMBURGUER BUTTON
MENU_TOGGLE.addEventListener('click', function () {
  // 'ACTIVE' CLASS DROP-DOWN MENU TO SHOW/HIDE
  HEADER_BUTTONS.classList.toggle('active');
});

// CLOSE WHEN CLICK OUTSIDE THE BUTTON 
document.addEventListener('click', function (event) {
  const IS_CLICK_INSIDE_MENU = HEADER_BUTTONS.contains(event.target);
  const IS_CLICK_ON_TOGGLE = MENU_TOGGLE.contains(event.target);

  if (!IS_CLICK_INSIDE_MENU && !IS_CLICK_ON_TOGGLE && HEADER_BUTTONS.classList.contains('active')) {
    HEADER_BUTTONS.classList.remove('active');
  }
});
