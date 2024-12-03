document.addEventListener('DOMContentLoaded', () => {
    const container3 = document.querySelector('.container3');
    let isDragging = false;
    let offsetX, offsetY;


    container3.addEventListener('mousedown', (e) => {
        isDragging = true;

        offsetX = e.clientX - container3.offsetLeft;
        offsetY = e.clientY - container3.offsetTop;
        container3.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {

            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            container3.style.left = `${x}px`;
            container3.style.top = `${y}px`;
            container3.style.position = 'absolute';
        }
    });


    document.addEventListener('mouseup', () => {
        isDragging = false;
        container3.style.cursor = 'grab';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1500); 
});


