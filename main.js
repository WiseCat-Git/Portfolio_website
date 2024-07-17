function scrollToAnchor(anchor) {
    const target = document.getElementById(anchor);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToPreviousSection() {
    const sections = document.querySelectorAll('section');
    const currentPosition = window.scrollY;
    for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < currentPosition - 50) {
            window.scrollTo({
                top: sections[i].offsetTop,
                behavior: 'smooth'
            });
            break;
        }
    }
}

function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    const currentPosition = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > currentPosition + 50) {
            window.scrollTo({
                top: sections[i].offsetTop,
                behavior: 'smooth'
            });
            break;
        }
    }
}

window.onscroll = function() {
    const navigator = document.querySelector('.to-top-navigator');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navigator.style.opacity = '0.8';
    } else {
        navigator.style.opacity = '0';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.getElementById("carouselInner");
    const images = carouselInner.getElementsByTagName("img");
    const totalImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = totalImages - 1; // Stop at the last image
            clearInterval(carouselInterval); // Stop the interval
        }
        const offset = -currentIndex * (images[0].offsetWidth + 20); // 20 is the margin between images
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    const carouselInterval = setInterval(showNextImage, 2000); // Adjust timing as needed
});
