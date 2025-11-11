// Staff Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeStaffDashboard();
});

function initializeStaffDashboard() {
    // Add logout functionality
    const logoutBtn = document.getElementById('staffLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('wolfbite_session');
            alert('Logged out successfully');
            window.location.href = 'staff-login.html';
        });
    }
    
    console.log('Staff dashboard initialized - Full functionality coming in Phase 5');
}