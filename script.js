const imageUrls = [
    "images/image_1.png",
    "images/image_2.png",
    "images/image_3.png",
    "images/image_4.png",
    "images/image_5.png",
    "images/image_6.png",
    "images/image_7.png",
    "images/image_8.png",
    "images/image_9.png",
    "images/image_10.png",
    "images/image_11.png",
    "images/image_12.png",
    "images/image_13.png",
    "images/image_14.png",
    "images/image_15.png",
    "images/image_16.png",
    "images/image_17.png",
    "images/image_18.png",
    "images/image_19.png",
    "images/image_20.png",
    "images/image_21.png",
    "images/image_22.png",
    "images/image_23.png",
    "images/image_24.png",
    "images/image_25.png",
    "images/image_26.png",
    "images/image_27.png",
    "images/image_28.png",
    "images/image_29.png",
    "images/image_30.png",
    "images/image_31.png",
    "images/image_32.png",
    "images/image_33.png",
    "images/image_34.png",
    "images/image_35.png",
    "images/image_36.png",
    "images/image_37.png",
    "images/image_38.png",
    "images/image_39.png",
    "images/image_40.png",
    "images/image_41.png",
    "images/image_42.png",
    "images/image_43.png",
    "images/image_44.png",
    "images/image_45png",
    "images/image_46.png",
    "images/image_47.png",
    "images/image_48.png",
    "images/image_49.png",
    "images/image_50.png",
    "images/image_51.png",
    "images/image_52.png",
    "images/image_53.png",
    "images/image_54.png"
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

let currentImageIndex = 0;
let shuffledUrls = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function createImageElement(url, index) {
    const container = document.createElement('div');
    container.className = 'img-container';
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    container.appendChild(img);
    container.addEventListener('click', () => openLightbox(index));
    return container;
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function updateLightboxImage() {
    lightboxImage.src = shuffledUrls[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % shuffledUrls.length;
    updateLightboxImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + shuffledUrls.length) % shuffledUrls.length;
    updateLightboxImage();
}

function initializeGallery() {
    shuffledUrls = shuffleArray(imageUrls);
    shuffledUrls.forEach((url, index) => {
        gallery.appendChild(createImageElement(url, index));
    });
}

lightbox.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
        }
    }
});

initializeGallery();
