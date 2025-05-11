let slides;
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll(".slides img");
    if (slides.length > 0) {
        initializeSlider();
    } else {
        console.error("No slides found. Please ensure elements with the class 'slides img' exist in the DOM.");
    }
});

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }
    else{
        slideIndex = index;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// window.addEventListener('scroll', () => {
//     const elements = document.querySelectorAll('.fade-on-scroll');
//     elements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom >= 0) {
//             element.classList.remove('hidden');
//         } else {
//             element.classList.add('hidden');
//         }
//     });
// }); 

window.addEventListener('load', () => {
    document.querySelectorAll('.trigger_popup_fricc').forEach(trigger => {
        trigger.addEventListener('click', function () {
            const popupId = this.getAttribute('data-popup');
            const popupElement = document.getElementById(popupId);
            if (popupElement) {
                popupElement.style.display = 'block';
            } else {
                console.error(`Popup with id "${popupId}" not found. Ensure the 'data-popup' attribute matches the popup's id.`);
            }
        });
    });
    
    document.querySelectorAll('.popupCloseButton').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.hover_bkgr_fricc').style.display = 'none';
        });
    });
    
    // Close popup when clicking outside of it
    document.querySelectorAll('.hover_bkgr_fricc').forEach(background => {
        background.addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
});