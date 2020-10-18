var animationBottom      = document.getElementById("first");
var firstAnimationLeft   = document.getElementById("firstAnimationLeft");
var firstAnimationRight  = document.getElementById("firstAnimationRight");
var secondAnimationRight = document.getElementById("secondAnimationRight");
var secondAnimationLeft  = document.getElementById("secondAnimationLeft");
var thirdAnimationLeft   = document.getElementById("thirdAnimationLeft");
var thirdAnimationRight  = document.getElementById("thirdAnimationRight");
var htmlImage            = document.getElementById("html-i");
var cssImage             = document.getElementById("css-i");
var javascriptImage      = document.getElementById("javascript-i");
window.addEventListener("scroll", function(){
    var scrollView = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = window.scrollY/scrollView*100;
    var winWidth = window.innerWidth;
    console.log(scrolled);
    console.log(winWidth);
    if (scrolled > 27.90 && winWidth > 735){
        animationBottom.classList.add("animate-bottom");
        animationBottom.style.visibility = "visible";
    }
    if (scrolled > 46.48 && winWidth > 735){
        firstAnimationLeft.classList.add("animate-left");
        firstAnimationRight.classList.add("animate-right");
        firstAnimationLeft.style.visibility = "visible";
        firstAnimationRight.style.visibility = "visible";
        htmlImage.style.visibility = "visible";
    }
    if (scrolled > 59.24 && winWidth > 735){
        secondAnimationLeft.classList.add("animate-left");
        secondAnimationRight.classList.add("animate-right");
        secondAnimationRight.style.visibility = "visible";
        secondAnimationLeft.style.visibility = "visible";
        cssImage.style.visibility = "visible";
    }
    if (scrolled > 71.71 && winWidth > 735){
        thirdAnimationLeft.classList.add("animate-left");
        thirdAnimationRight.classList.add("animate-right");
        thirdAnimationRight.style.visibility = "visible";
        thirdAnimationLeft.style.visibility = "visible";
        javascriptImage.style.visibility = "visible";
    }
    if (scrolled > 24.84 && winWidth < 735){
        animationBottom.classList.add("animate-bottom");
        animationBottom.style.visibility = "visible";
    }
    if (scrolled > 45.65 && winWidth < 735){
        firstAnimationLeft.classList.add("animate-left");
        firstAnimationRight.classList.add("animate-right");
        firstAnimationLeft.style.visibility = "visible";
        firstAnimationRight.style.visibility = "visible";
        htmlImage.style.visibility = "visible";
    }
    if (scrolled > 61.01 && winWidth < 735){
        secondAnimationLeft.classList.add("animate-left");
        secondAnimationRight.classList.add("animate-right");
        secondAnimationRight.style.visibility = "visible";
        secondAnimationLeft.style.visibility = "visible";
        cssImage.style.visibility = "visible";
    }
    if (scrolled > 76.92 && winWidth < 735){
        thirdAnimationLeft.classList.add("animate-left");
        thirdAnimationRight.classList.add("animate-right");
        thirdAnimationRight.style.visibility = "visible";
        thirdAnimationLeft.style.visibility = "visible";
        javascriptImage.style.visibility = "visible";
    }
});