function showMeow() {
    const meowText = document.getElementById('meow-text');
    meowText.style.display = 'block';
    setTimeout(() => {
        meowText.style.display = 'none';
    }, 3000);
}

function createFallingRainbow() {
    const rainbowContainer = document.getElementById('rainbow-container');
    const rainbow = document.createElement('div');
    rainbow.classList.add('rainbow');
    rainbow.textContent = '🌈';
    rainbow.style.left = Math.random() * 100 + 'vw';
    rainbow.style.animationDuration = Math.random() * 3 + 2 + 's';
    rainbowContainer.appendChild(rainbow);

    setTimeout(() => {
        rainbow.remove();
    }, 5000);
}

function startRainbows() {
    setInterval(createFallingRainbow, 300);
}

document.addEventListener('DOMContentLoaded', startRainbows);
