// Seleccionar los botones y el contenedor del grid
// Seleccionar los botones y el contenedor del grid
const twoColumnsBtn = document.getElementById('two-columns');
const threeColumnsBtn = document.getElementById('three-columns');
const circularBtn = document.getElementById('circular');
const squareBtn = document.getElementById('square');
const portraitBtn = document.getElementById('portrait');
const imageGrid = document.getElementById('imageGrid');
const images = document.querySelectorAll('#imageGrid img');

// Cambiar a grid de 2 columnas fijas
twoColumnsBtn.addEventListener('click', () => {
  imageGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
});

// Cambiar a grid de 3 columnas variables
threeColumnsBtn.addEventListener('click', () => {
  imageGrid.style.gridTemplateColumns = 'repeat(3, minmax(200px, 1fr))';
});

// Cambiar las imágenes a circulares
circularBtn.addEventListener('click', () => {
  images.forEach(img => img.classList.add('circular'));
  images.forEach(img => img.classList.remove('square', 'portrait'));
});

// Cambiar las imágenes a cuadradas (aspect ratio 1:1)
squareBtn.addEventListener('click', () => {
  images.forEach(img => img.classList.add('square'));
  images.forEach(img => img.classList.remove('circular', 'portrait'));
});

// Cambiar las imágenes a retrato (aspect ratio 3:4)
portraitBtn.addEventListener('click', () => {
  images.forEach(img => img.classList.add('portrait'));
  images.forEach(img => img.classList.remove('circular', 'square'));
});
