document.addEventListener('DOMContentLoaded', function() {

    //step 1:

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

    
    //Step 2


    const profileBtn = document.getElementById('profile-btn');
    const dokumenteBtn= document.getElementById('dokumente-btn');
    const profileTab= document.getElementById('profile-tab');
    const dokumenteTab=document.getElementById('dokumente-tab');

    dokumenteBtn.addEventListener('click',function(){
        //switch to dokumente tab
        dokumenteBtn.classList.add('active');
        profileBtn.classList.remove('active');
        dokumenteTab.classList.add('active');
        profileTab.classList.remove('active');
    });

    profileBtn.addEventListener('click',function(){
        //switeh to profile tab
        profileBtn.classList.add('active');
        dokumenteBtn.classList.remove('active');
        profileTab.classList.add('active');
        profileTab.classList.remove('active');
    });
});
