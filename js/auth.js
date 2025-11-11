// Authentication JavaScript for WolfBite Bistro

document.addEventListener('DOMContentLoaded', function() {
    initializeAuthForms();
});

function initializeAuthForms() {
    // Customer Login Form
    const customerLoginForm = document.getElementById('customerLoginForm');
    if (customerLoginForm) {
        customerLoginForm.addEventListener('submit', handleCustomerLogin);
    }
    
    // Customer Signup Form
    const customerSignupForm = document.getElementById('customerSignupForm');
    if (customerSignupForm) {
        customerSignupForm.addEventListener('submit', handleCustomerSignup);
    }
    
    // Staff Login Form
    const staffLoginForm = document.getElementById('staffLoginForm');
    if (staffLoginForm) {
        staffLoginForm.addEventListener('submit', handleStaffLogin);
    }
    
    // Admin Login Form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
}

// Customer Login Handler
function handleCustomerLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Basic validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Simulate login process (will be replaced with actual API call)
    console.log('Customer login attempt:', { email, password });
    alert('Customer login functionality will be connected to database in Phase 3');
    
    // For now, simulate successful login
    simulateSuccessfulLogin('customer', { email, name: 'Customer User' });
}

// Customer Signup Handler
function handleCustomerSignup(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Validation
    if (!fullName || !email || !phone || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Simulate signup process
    console.log('Customer signup attempt:', { fullName, email, phone, password });
    alert('Customer signup functionality will be connected to database in Phase 3');
    
    // For now, simulate successful signup and redirect to login
    alert('Account created successfully! Please login.');
    window.location.href = 'customer-login.html';
}

// Staff Login Handler
function handleStaffLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const staffId = formData.get('staffId');
    const password = formData.get('password');
    
    if (!staffId || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate staff login
    console.log('Staff login attempt:', { staffId, password });
    alert('Staff login functionality will be connected to database in Phase 3');
    
    // For now, simulate successful login
    simulateSuccessfulLogin('staff', { staffId, name: 'Staff Member' });
}

// Admin Login Handler
function handleAdminLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate admin login
    console.log('Admin login attempt:', { username, password });
    alert('Admin login functionality will be connected to database in Phase 3');
    
    // For now, simulate successful login
    simulateSuccessfulLogin('admin', { username, name: 'Administrator' });
}

// Simulate successful login (placeholder for Phase 3)
function simulateSuccessfulLogin(role, userData) {
    // Store user session (will be enhanced in Phase 3)
    const session = {
        role: role,
        user: userData,
        loggedIn: true,
        timestamp: new Date().toISOString()
    };
    
    // Use storage helper from main.js if available, otherwise use localStorage directly
    try {
        localStorage.setItem('wolfbite_session', JSON.stringify(session));
    } catch (e) {
        console.error('Error saving session:', e);
    }
    
    // Redirect based on role (placeholder URLs for now)
    switch(role) {
        case 'customer':
            alert('Customer login successful! Customer dashboard coming in Phase 4.');
            // window.location.href = 'customer-dashboard.html';
            break;
        case 'staff':
            alert('Staff login successful! Staff dashboard coming in Phase 5.');
            // window.location.href = 'staff-dashboard.html';
            break;
        case 'admin':
            alert('Admin login successful! Admin dashboard coming in Phase 6.');
            // window.location.href = 'admin-dashboard.html';
            break;
    }
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}