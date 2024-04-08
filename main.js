/* const cubeContainer = document.getElementById('cubeContainer');

cubeContainer.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'orange'; // Change the background color of the container on hover
});

cubeContainer.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'black'; // Change the background color of the container back when the mouse leaves
}); */

let isMouseDown = false;
let startX, startY;
let startRotateX = 0;
let startRotateY = 0;


cube.addEventListener('mousedown', onMouseDown);
cube.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

function onMouseDown(event) {
    if (event.target.tagName.toLowerCase() === 'a') return; // Prevent rotation when clicking on the link
    isMouseDown = true;
    startX = event.clientX;
    startY = event.clientY;
    startRotateX = cube.style.transform ? parseFloat(cube.style.transform.match(/rotateX\(([^)]+)\)/)[1]) : 0;
    startRotateY = cube.style.transform ? parseFloat(cube.style.transform.match(/rotateY\(([^)]+)\)/)[1]) : 0;
}

function onMouseUp() {
    isMouseDown = false;
}

function onMouseMove(event) {
    if (!isMouseDown) return;
    const diffX = event.clientX - startX;
    const diffY = event.clientY - startY;
    cube.style.transform = `rotateX(${startRotateX - diffY}deg) rotateY(${startRotateY + diffX}deg)`;
}
