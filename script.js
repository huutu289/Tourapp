// Array of different greetings
const greetings = [
    "Hello World!",
    "¡Hola Mundo!",
    "Bonjour le Monde!",
    "Hallo Welt!",
    "Ciao Mondo!",
    "Olá Mundo!",
    "Привет Мир!",
    "こんにちは世界!",
    "안녕하세요 세계!",
    "مرحبا بالعالم!"
];

let currentGreetingIndex = 0;

// Get DOM elements
const greetingElement = document.getElementById('greeting');
const changeButton = document.getElementById('changeGreeting');

// Function to change greeting with animation
function changeGreeting() {
    // Fade out
    greetingElement.style.opacity = '0';
    greetingElement.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        // Change to next greeting
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentGreetingIndex];
        
        // Fade in
        greetingElement.style.opacity = '1';
        greetingElement.style.transform = 'translateY(0)';
    }, 200);
}

// Add click event to button
changeButton.addEventListener('click', changeGreeting);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add typing effect to subtitle
    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
    
    // Add hover effects to features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.background = 'rgba(255, 255, 255, 0.9)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.background = 'rgba(255, 255, 255, 0.7)';
        });
    });
});

// Add smooth scrolling and parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.card');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        changeGreeting();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up
            changeGreeting();
        }
    }
}