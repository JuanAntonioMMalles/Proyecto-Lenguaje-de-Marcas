// obtain elements
const menuToggle = document.getElementById('menu-hamburguer');
const headerButtons = document.getElementById('header-buttons');

//click at hamburguer button
menuToggle.addEventListener('click', function () {
  // Desplegable de la clase 'active' para mostrar/ocultar el menú
  headerButtons.classList.toggle('active');
});

//Close when click outside the button 
document.addEventListener('click', function (event) {
  const isClickInsideMenu = headerButtons.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle && headerButtons.classList.contains('active')) {
    headerButtons.classList.remove('active');
  }
});