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
        caption: 'Zuma (from al-jum’ah, “Friday”), a Nupe from Northern Benin, was deported on
the Clotilda, the last slave ship to the United States, which arrived in Mobile,
Alabama, on July 8, 1860. (Courtesy of The New York Public Library,
Schomburg Center for Research in Black Culture, Jean Blackwell Hutson
Research and Reference Division)
'
    },
    {
        src: 'img9.jpg',
        caption: 'First page of a six-page manuscript written in Arabic in the 1850s by “Sana
See,” a Liberated African residing in Panama. It is made of surahs and awrad
(litanies) linked to the Qadiriyya Sufi order. (Courtesy of the Omar ibn Said
Foundation)'
    },  
    {
        src: 'img11.jpg',
        caption: '"Ben-Ali's Diary" written in Arabic by Bilali Mohamed on Sapelo Island, Georgia, in the 1850s.'
    },
    {
        src: 'img12.jpg',
        caption: 'A collection of the names of the enslaved people in Americas'
    },
    {
        src: 'img13.jpg',
        caption: 'Surah al Mulk (Chapter from The Quran) from the Autobiograpgy of Omar ibn said written in Arabic'
    },
    {
        src: 'img14.jpg',
        caption: 'Omar ibn Said 1770-1863 Historical Marker'
    },
    {
        src: 'img15.jpg',
        caption: 'Omar ibn Said 1770-1863 Historical Marker'
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
