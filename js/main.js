// Main JavaScript for WolfBite Bistro

// Sample menu data (will be replaced with database data later)
const sampleMenuItems = [
    {
        id: 1,
        name: "Grilled Wolf Steak",
        description: "Premium steak with wild herbs and red wine reduction",
        price: 24.99,
        category: "main",
        image: "https://via.placeholder.com/300x200?text=Wolf+Steak"
    },
    {
        id: 2,
        name: "Forest Mushroom Pasta",
        description: "Handmade pasta with wild mushrooms and truffle oil",
        price: 18.99,
        category: "main",
        image: "https://via.placeholder.com/300x200?text=Mushroom+Pasta"
    },
    {
        id: 3,
        name: "Arctic Char",
        description: "Pan-seared char with lemon butter and capers",
        price: 22.99,
        category: "main",
        image: "https://via.placeholder.com/300x200?text=Arctic+Char"
    },
    {
        id: 4,
        name: "Berry Forest Dessert",
        description: "Mixed berries with vanilla ice cream and mint",
        price: 8.99,
        category: "dessert",
        image: "https://via.placeholder.com/300x200?text=Berry+Dessert"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadMenuItems();
    initializeMap();
});

// Load menu items to the homepage
function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    sampleMenuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-price">$${item.price.toFixed(2)}</div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Initialize the map (placeholder for now)
// Initialize the map with Google Maps embed
function initializeMap() {
    const mapElement = document.getElementById('map');
    
    if (!mapElement) return;
    
    // Google Maps embed is now directly in the HTML
    // This function can be used for additional map interactions later
    console.log('Google Maps embed loaded for coordinates: 13°41\'47.5"N 120°54\'26.1"E');
    
    // Additional map functionality can be added here in future phases
    // For example: custom markers, interactive features, etc.
}

// Basic form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Local storage helpers for session management
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, storage };
}