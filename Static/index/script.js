let currentIndex = 0;
const images = document.querySelectorAll('.carrosel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}
showImage(currentIndex);


setInterval(nextImage, 3000); 
