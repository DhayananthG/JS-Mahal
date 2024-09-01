let test1 = document.getElementById("slideshow-container");
let textElement = document.getElementById('animated-text');

let arr = ["main_cover", "main_cover1", "main_cover2", "main_cover3", "main_cover4", "main_cover5", "main_cover6", "main_cover7", "main_cover8", "main_cover9"];
let texts = [
  "Welcome to JS Mahal",
  "Discover Our Gallery",
  "Enjoy Our Amenities",
  "Book Now for Special Offers",
  "Contact Us for More Information",
  "Experience Luxury and Comfort",
  "Savor Delicious Cuisine",
  "Relax in Our Beautiful Spaces",
  "Join Us for Memorable Events",
  "Celebrate Life's Special Moments"
];

let num1 = 0;
let num2 = 1;
const n = arr.length;

const change_bg = () => {
  // Update background classes with fade effect
  test1.classList.remove(arr[num1]);
  test1.classList.add(arr[num2]);

  // Update text content
  textElement.innerText = texts[num2];

  // Update animation for the new text
  const letters = textElement.innerText.split('');
  textElement.innerHTML = letters.map((letter, index) => {
    const char = letter === ' ' ? '&nbsp;' : letter;
    return `<span style="animation-delay: ${index * 0.1}s;">${char}</span>`;
  }).join('');

  num1 = (num1 + 1) % n;
  num2 = (num2 + 1) % n;

  // Recursive call using setTimeout
  setTimeout(change_bg, 10000);
};
// Start the background change when the document is ready
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(change_bg, 10000);
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
