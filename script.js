document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#gallery .photo-grid img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 7000); // Switch image every 7 seconds
});