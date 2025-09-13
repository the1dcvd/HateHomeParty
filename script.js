

///////////////////clickable logo///////////////////

logo_top = document.querySelector(".topmenu--container img")
targ = document.getElementById("click")

logo_top.addEventListener('click', g => {
    targ.click()
})

///////////////////page styling function///////////////////

let pageState = false; //this variable indicates which page style is active

const btn = document.querySelector('button.page_switch')

const wrap = document.querySelector('main')
const logo1 = document.querySelector('.hate--logo')
const logo2 = document.querySelector('.dude--logo')

btn.addEventListener('click', e => {
    if(pageState == false){
        btn.style.background = '#FDADE2';
        wrap.style.background = '#7DD2D9';
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        pageState = true; //change of active style variable
    } else {
        btn.style.background = '#7DD2D9';
        wrap.style.background = '#FDADE2';
        logo1.style.display = 'block';
        logo2.style.display = 'none';
        pageState = false; //change of active style variable
    }
})

///////////////////slideshow in merch section///////////////////

let slideIndex = 0; //this variable indicates current slide index

const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
let slides = document.getElementsByClassName("mySlides");

slides[slideIndex].style.display = 'block' //display before click

btnNext.addEventListener('click', f => {  //next button
    for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
    } // hide all slides

    slideIndex++ 

    if(slideIndex < slides.length) {
    slides[slideIndex].style.display = 'block'
    } else {
    slideIndex=0
    slides[slideIndex].style.display = 'block'
    }
})

btnPrev.addEventListener('click', b => {  //previous button
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    } // hide all slides

    if(slideIndex == 0) {
    slideIndex = (slides.length)-1
    slides[slideIndex].style.display = 'block'
    } else {
    slideIndex--  
    slides[slideIndex].style.display = 'block'
    }
})

