// Gallery images data
const galleryImages = [
    {
        src: 'img1.jpg',
        caption: 'Job Ben Solomon (Ayyub ibn Sulaiman)'
    },
    {
        src: 'img2.jpg',
        caption: 'Ibrahima abd al Rahman'
    },
    {
        src: 'img3.jpg',
        caption: 'Nicholas Said'
    },
    {
        src: 'img4.jpg',
        caption: 'Omar ibn Said'
    },
    {
        src: 'img5.jpg',
        caption: 'Portrait of Enslaved Muslim Woman'
    },
    {
        src: 'img6.jpg',
        caption: 'Portrait of Yarrow Mamout by Charles Willson Peale'
    },
    {
        src: 'img7.jpg',
        caption: 'Omar ibn Said 1770-1863 Historical Marker'
    },
    {
        src: 'img8.jpg',
        caption: 'Unknown Portrait 1'
    },
    {
        src: 'img9.jpg',
        caption: 'Unknown Portrait 2'
    },
    {
        src: 'img10.jpg',
        caption: 'Unknown Portrait 3'
    },
    {
        src: 'img11.jpg',
        caption: 'Unknown Portrait 4'
    },
    {
        src: 'img12.jpg',
        caption: 'Unknown Portrait 5'
    },
    {
        src: 'img13.jpg',
        caption: 'Unknown Portrait 6'
    },
    {
        src: 'img14.jpg',
        caption: 'Unknown Portrait 7'
    },
    {
        src: 'img15.jpg',
        caption: 'Unknown Portrait 8'
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
    const images = galleryImages.map(image => image.src); // Use all `src` values from galleryImages
    let currentSlide = 0;

    // Create slides
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index
