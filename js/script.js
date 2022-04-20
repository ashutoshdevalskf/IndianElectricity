let logBtn = document.querySelector('#log-btn');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');





logBtn.addEventListener('click', () => {
logBtn.classList.toggle('fa-times');

});

formBtn.addEventListener('click', () => {
loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
loginForm.classList.remove('active');


});

// slide show javascript

let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {

    showSlides(++slideIndex);
    
    
}, 3000);

function plusSlides(n) {
showSlides(slideIndex += n);
    
    


}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active-dot", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active-dot";
}


// faq

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {

        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

var consPage =document.getElementsByClassName("consumption-page");
var consBody =document.getElementsByClassName("consumption-body");


function abc()
{
    consBody[0].classList.toggle("active");
    consBody[1].classList.toggle("active");
    consBody[2].classList.toggle("active");
    consBody[3].classList.toggle("active");
}
