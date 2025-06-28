const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(item.querySelector('img').src);
  });
});

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function navigate(direction) {
  const visibleItems = Array.from(document.querySelectorAll('.gallery-item'))
    .filter(item => item.style.display !== 'none');

  currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
  const nextImg = visibleItems[currentIndex].querySelector('img').src;
  lightboxImg.src = nextImg;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
