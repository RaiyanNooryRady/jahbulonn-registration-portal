document.addEventListener('DOMContentLoaded', function() {
    const registrationBtn = document.getElementById('registration-btn');
    const loginBtn = document.getElementById('login-btn');
    const registrationTab = document.getElementById('registration-tab');
    const loginTab = document.getElementById('login-tab');
    
    registrationBtn.addEventListener('click', function() {
        // Switch to registration tab
        registrationBtn.classList.add('active');
        loginBtn.classList.remove('active');
        registrationTab.classList.add('active');
        loginTab.classList.remove('active');
    });
    
    loginBtn.addEventListener('click', function() {
        // Switch to login tab
        loginBtn.classList.add('active');
        registrationBtn.classList.remove('active');
        loginTab.classList.add('active');
        registrationTab.classList.remove('active');
    });
    
});
