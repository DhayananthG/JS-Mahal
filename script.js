// let test1 = document.getElementById("slideshow-container");
// let textElement = document.getElementById('animated-text');

// let arr = ["main_cover", "main_cover1", "main_cover2", "main_cover3", "main_cover4", "main_cover5", "main_cover6", "main_cover7", "main_cover8", "main_cover9"];
// let texts = [
//   "Welcome to JS Mahal",
//   "Discover Our Gallery",
//   "Enjoy Our Amenities",
//   "Experience Luxury and Comfort",
//   "Savor Delicious Cuisine",
//   "Relax in Our Beautiful Spaces",
//   "Join Us for Memorable Events",
//   "Celebrate Life's Special Moments",
//   "Book Now for Special Offers",
//   "Contact Us for More Information"
// ];

// let num = 0;
// const n = texts.length;

// const change_text = () => {
  
//     textElement.innerText = texts[num];

//     // Update animation for the new text
//     const letters = textElement.innerText.split('');
//     textElement.innerHTML = letters.map((letter, index) => {
//         const char = letter === ' ' ? '&nbsp;' : letter;
//         return `<span style="animation-delay: ${index * 0.1}s;">${char}</span>`;
//     }).join('');

//     num = (num + 1) % n;

//     // Recursive call using setTimeout
//     setTimeout(change_text, 5000);
//     };

//     // Start the text change when the document is ready
//     document.addEventListener('DOMContentLoaded', () => {
//         setTimeout(change_text, 5000);
//     });        
let test1 = document.getElementById("slideshow-container");
let textElement = document.getElementById('animated-text');

let images = [
    "url('image1.jpg')",
    "url('image2.jpg')",
    "url('image3.jpg')",
    "url('image4.jpg')",
    "url('image5.jpg')",
    "url('image6.jpg')",
    "url('image7.jpg')",
    "url('image8.jpg')",
    "url('image9.jpg')",
    "url('image10.jpg')"
];
let texts = [
    "Welcome to JS Mahal",
    "Discover Our Gallery",
    "Enjoy Our Amenities",
    "Experience Luxury and Comfort",
    "Savor Delicious Cuisine",
    "Relax in Our Beautiful Spaces",
    "Join Us for Memorable Events",
    "Celebrate Life's Special Moments",
    "Book Now for Special Offers",
    "Contact Us for More Information"
];

let num = 0;
const n = texts.length;

const change_slide = () => {
    // Change the background image
    test1.style.backgroundImage = images[num];

    // Delay the text change to appear after the image change
    setTimeout(() => change_text(num), 1000); // 1-second delay for text after image change

    num = (num + 1) % n;

    // Recursive call using setTimeout for the next slide
    setTimeout(change_slide, 5000);
};

const change_text = (index) => {
    textElement.innerText = texts[index];

    // Update animation for the new text
    const letters = textElement.innerText.split('');
    textElement.innerHTML = letters.map((letter, i) => {
        const char = letter === ' ' ? '&nbsp;' : letter;
        return `<span style="animation-delay: ${i * 0.1}s;">${char}</span>`;
    }).join('');
};

// Start the slideshow when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    change_slide();
});





const sidebar = document.getElementById('sidebar');
const sidebarOpen = document.getElementById('sidebarOpen');
const sidebarClose = document.getElementById('sidebarClose');    
sidebarOpen.addEventListener('click', () => {     // Open sidebar
    sidebar.classList.remove('-translate-x-full');
});      
sidebarClose.addEventListener('click', () => {      // Close sidebar
    sidebar.classList.add('-translate-x-full');
});

      
// Select the navbar element
const navbar = document.getElementById('navbar');
const sideBar = document.getElementById('sidebarOpen');
// Add an event listener for scrolling
window.addEventListener('scroll', () => 
{
    if (window.scrollY > 50)    // Adjust the scrollY value as needed
    { 
        navbar.classList.remove('bg-transparent', 'text-white');    // Remove the transparent background and white text color
        navbar.classList.add('bg-white', 'shadow-md', 'text-black');    // Add white background, shadow, and black text color
        sideBar.classList.remove('text-white');
        sideBar.classList.add('text-black');
    } 
    else 
    {
        navbar.classList.remove('bg-white', 'shadow-md', 'text-black');     // Remove the white background, shadow, and black text color
        navbar.classList.add('bg-transparent', 'text-white');     // Revert back to transparent background and white text color
        sideBar.classList.remove('text-black');
        sideBar.classList.add('text-white');
    }
});
