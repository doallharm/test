document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery .photo-grid img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 7000); // Switch image every 7 seconds

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
});
	