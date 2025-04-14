const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function (e) {
  const konamiModal = document.getElementById('konamiModal');
  const closeButton = document.getElementById('closeModal');

  if (e.key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      konamiModal.classList.remove('hidden');
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }

  closeButton.addEventListener('click', function () {
    konamiModal.classList.add('hidden');
  });
});
