document.getElementById('loginButton').addEventListener('click', function () {
  // Agregar la clase de apertura a las cortinas
  document.querySelector('.transition-container').classList.add('open');

  // Esperar a que termine la animación antes de mostrar el contenido
  setTimeout(() => {
    document.querySelector('header').style.display = 'none'; // Ocultar el contenido inicial
    document.getElementById('mainContent').classList.remove('hidden'); // Mostrar el nuevo contenido
  }, 1000); // Coincide con el tiempo de animación en CSS
});
