// Gallery images data
const galleryImages = [
    {
        src: 'img1.jpg',
        caption: 'Omar ibn Said\'s autobiography manuscript in Arabic'
    },
    {
        src: 'img2.jpg',
        caption: 'Portrait of Omar ibn Said'
    },
    {
        src: 'img3.jpg',
        caption: 'Portrait of Nicholas Said'
    },
    {
        src: 'img4.jpg',
        caption: 'Portrait of Yarrow Mamout by Charles Willson Peale'
    },
    {
        src: 'img5.jpg',
        caption: 'Job Ben Solomon (Ayyub ibn Sulaiman)'
    },
    {
        src: 'img6.jpg',
        caption: 'Historical document from African Muslim archives'
    },
    {
        src: 'img7.jpg',
        caption: 'Early American Islamic manuscript'
    }
];

// Function to populate gallery
function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}">
            <div class="caption">${image.caption}</div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow functionality
function createSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];
    let currentSlide = 0;

    // Create slides
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${img})`;
        slideshowContainer.appendChild(slide);
    });

    // Function to change slides
    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize gallery and slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createSlideshow();
    populateGallery();
}); 