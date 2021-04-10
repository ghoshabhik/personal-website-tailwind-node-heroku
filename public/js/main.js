window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    var body = document.getElementsByTagName("BODY")[0];
    const lightButton = document.getElementById('light-button');
    const darkButton = document.getElementById('dark-button');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');


    if(!localStorage.mode){
        localStorage.mode = 'light';
        lightButton.classList.remove('hidden');
    } else {
        if(localStorage.mode === 'light'){
            darkButton.classList.remove('hidden');
            lightButton.classList.add('hidden');
        }
        if(localStorage.mode === 'dark'){
            lightButton.classList.remove('hidden');
            darkButton.classList.add('hidden');
            body.classList.toggle('dark');
        }
    }
    
    lightButton.addEventListener('click', (e) => {
        localStorage.mode = 'light';
        darkButton.classList.remove('hidden');
        lightButton.classList.add('hidden');
        body.classList.toggle('dark');
    })

    darkButton.addEventListener('click', (e) => {
        localStorage.mode = 'dark';
        lightButton.classList.remove('hidden');
        darkButton.classList.add('hidden');
        body.classList.toggle('dark');
    })

    mobileMenuButton.addEventListener('click', (e) => {
        mobileMenu.classList.toggle('hidden');
    })

    

});