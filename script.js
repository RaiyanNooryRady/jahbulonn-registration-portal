document.addEventListener('DOMContentLoaded', function() {
    // Get all steps
    const steps = document.querySelectorAll('.container');
    
    // Hide all steps except the first one initially
    steps.forEach((step, index) => {
        if (index !== 0) {
            step.classList.remove('active');
        }
    });

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
    const dokumenteBtn = document.getElementById('dokumente-btn');
    const profileTab = document.getElementById('profile-tab');
    const dokumenteTab = document.getElementById('dokumente-tab');

    dokumenteBtn.addEventListener('click', function() {
        //switch to dokumente tab
        dokumenteBtn.classList.add('active');
        profileBtn.classList.remove('active');
        dokumenteTab.classList.add('active');
        profileTab.classList.remove('active');
    });

    profileBtn.addEventListener('click', function() {
        //switch to profile tab
        profileBtn.classList.add('active');
        dokumenteBtn.classList.remove('active');
        profileTab.classList.add('active');
        dokumenteTab.classList.remove('active');
    });

    //step 4
    const optionHuman = document.getElementById('humanmedizin');
    const optionZahn = document.getElementById('zahnmedizin');
    const optionBeides = document.getElementById('beides');
    const schoolHuman = document.getElementById('humanmedizin_selected');
    const schoolZahn = document.getElementById('zahnmedizin_selected');
    const schoolBeides = document.getElementById('beides_selected');

    // Hide all school sections initially except humanmedizin
    schoolZahn.classList.remove('active');
    schoolBeides.classList.remove('active');
    schoolHuman.classList.add('active');

    // Add event listeners for all radio buttons
    document.querySelectorAll('input[name="chosen_school"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Hide all school sections
            schoolHuman.classList.remove('active');
            schoolZahn.classList.remove('active');
            schoolBeides.classList.remove('active');

            // Show the selected section
            if (this.value === 'Humanmedizin') {
                schoolHuman.classList.add('active');
            } else if (this.value === 'Zahnmedizin') {
                schoolZahn.classList.add('active');
            } else if (this.value === 'Beides') {
                schoolBeides.classList.add('active');
            }
        });
    });

    // Handle form submissions
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Hide step 1 and show step 2
            document.getElementById('rp-step1').classList.remove('active');
            document.getElementById('rp-step2').classList.add('active');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Hide step 1 and show step 2
            document.getElementById('rp-step1').classList.remove('active');
            document.getElementById('rp-step2').classList.add('active');
        });
    }

    // Handle next buttons
    const nextButtons = document.querySelectorAll('.next-button');
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.container');
            const currentStepNumber = parseInt(currentStep.id.replace('rp-step', ''));
            const nextStepNumber = currentStepNumber + 1;
            
            // Hide current step
            currentStep.classList.remove('active');
            // Show next step
            document.getElementById(`rp-step${nextStepNumber}`).classList.add('active');
        });
    });

    // Handle previous buttons
    const prevButtons = document.querySelectorAll('.prev-button');
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.container');
            const currentStepNumber = parseInt(currentStep.id.replace('rp-step', ''));
            const prevStepNumber = currentStepNumber - 1;
            
            // Hide current step
            currentStep.classList.remove('active');
            // Show previous step
            document.getElementById(`rp-step${prevStepNumber}`).classList.add('active');
        });
    });
});
