const menuBtn = document.querySelector('.cameraBtn');
const camera = document.querySelector('.camera');

menuBtn.addEventListener('click', function () {
    camera.classList.toggle('is-active');

})