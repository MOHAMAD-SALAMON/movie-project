$(document).ready(function() {
    $('#autoWidth,#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        dots: false,
        onSliderLoad: function() {
            $('#autoWidth,#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });
  const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.box-movies');
const numberOfSlides=slides.length;
var slidNumber = 9;
for (var i=0;i<slidNumber;i++){
    if(slides[i]){
        slides[i].classList.add('active')
    }
}
nextBtn.onclick= () => {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    for (var i=slidNumber;i<slidNumber+9;i++){
        if(slides[i]){
            slides[i].classList.add('active')
        }
    }
    slidNumber+=9;
    if(slidNumber>=numberOfSlides){
        nextBtn.style.display="none"
    }
    prevBtn.style.display="flex"
}
prevBtn.onclick= () => {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    for (var i=slidNumber-18;i<slidNumber-9;i++){
        if(slides[i]){
            slides[i].classList.add('active')
        }
    }
    slidNumber-=9;
    if(slidNumber<=9){
        prevBtn.style.display="none"
    }
    nextBtn.style.display="flex"
}
