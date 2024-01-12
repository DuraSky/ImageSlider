import "./style.css"

console.log("Hi")

let slides = document.getElementsByClassName("image");
let displayDefault = 0;


let prevSlide = document.querySelector(".prev");
let nextSlide = document.querySelector(".next");

let firstDot = document.querySelector(".first");
let secondDot = document.querySelector(".second")
let thirdDot = document.querySelector(".third")
let fourthDot = document.querySelector(".fourth")

firstDot.addEventListener("click", ()=>{
    displayDefault = 0;
    slideShow(0);
    dotColorChange(0);
})

secondDot.addEventListener("click", ()=>{
    displayDefault = 1;
    slideShow(1);
    dotColorChange(1);
})

thirdDot.addEventListener("click", ()=>{
    displayDefault = 2;
    slideShow(2);
    dotColorChange(2);
})

fourthDot.addEventListener("click", ()=>{
    displayDefault = 3;
    slideShow(3);
    dotColorChange(3);
})


prevSlide.addEventListener("click", ()=>{
    displayDefault--;

    if(displayDefault < 0){
        slideShow(slides.length - 1);
        dotColorChange(slides.length - 1);
        displayDefault = slides.length - 1;
    }else{
        slideShow(displayDefault)
        dotColorChange(displayDefault)
    }
})

nextSlide.addEventListener("click", ()=>{
    displayDefault++;

    if(displayDefault > slides.length -1){
        slideShow(0);
        dotColorChange(0);
        displayDefault = 0;
    }else{
        slideShow(displayDefault);
        dotColorChange(displayDefault);
    }
})


function slideShow(displayThis){
    for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    slides[displayThis].style.display = "block";
    }
}

function dotColorChange(whichDot){
    firstDot.style.backgroundColor = "#bbb";
    secondDot.style.backgroundColor = "#bbb";
    thirdDot.style.backgroundColor = "#bbb";
    fourthDot.style.backgroundColor = "#bbb";


    switch(whichDot){
        case 0:
            firstDot.style.backgroundColor = "black";
            break;
        case 1:
            secondDot.style.backgroundColor = "black";
            break;
        case 2:
            thirdDot.style.backgroundColor = "black";
            break;
        case 3:
            fourthDot.style.backgroundColor = "black";
            break;
    }
    
}

slideShow(displayDefault);
dotColorChange(displayDefault);