/*let count = 0;

setInterval(()=>{
    count++;
    document.querySelector('.carrossel-slide').computedStyleMap.backgroundPosition=count+"px";
}, 1);*/

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot ");
    }slides[slideIndex-1].style.display = "flex";
    //dots[slideIndex-1].className += " active-carrossel-container ";
    if(dots[slideIndex].className == " active-carrossel-container "){
        console.log("já foi");
        dots[slideIndex].className -= " active-carrossel-container ";
    }else {
        dots[slideIndex-1].className += " active-carrossel-container ";
    }
    //dots[slideIndex].remove(" active-carrossel-container ");
}