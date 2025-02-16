document.addEventListener("mousemove", function(event) {
    const coords = document.getElementById("coords");
    coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    coords.style.left = `${event.clientX + 10}px`;
    coords.style.top = `${event.clientY + 10}px`;
});