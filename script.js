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
        dokumenteTab.classList.remove('active');
    });

    //step 4
    const optionHuman= document.getElementById('humanmedizin');
    const optionZahn= document.getElementById('zahnmedizin');
    const optionBeides= document.getElementById('beides');
    const schoolHuman= document.getElementById('humanmedizin_selected');
    const schoolZahn= document.getElementById('zahnmedizin_selected');
    const schoolBeides= document.getElementById('beides_selected');
    optionHuman.addEventListener('click',function(){
        schoolHuman.classList.add('active');
        schoolZahn.classList.remove('active');
        schoolBeides.classList.remove('active');
    });
    optionZahn.addEventListener('click',function(){
        schoolZahn.classList.add('active');
        schoolHuman.classList.remove('active');
        schoolBeides.classList.remove('active');
    });
    optionBeides.addEventListener('click',function(){
        schoolHuman.classList.remove('active');
        schoolZahn.classList.remove('active');
        schoolBeides.classList.add('active');
    });
});
