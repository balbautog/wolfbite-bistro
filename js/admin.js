// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAdminDashboard();
});

function initializeAdminDashboard() {
    // Add logout functionality
    const logoutBtn = document.getElementById('adminLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('wolfbite_session');
            alert('Logged out successfully');
            window.location.href = 'admin-login.html';
        });
    }
    
    console.log('Admin dashboard initialized - Full functionality coming in Phase 6');
}