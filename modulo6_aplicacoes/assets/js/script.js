var slideItem = 0;

window.onload = function() {
    setInterval(passarSlide, 2000);
    var slidewidth = document.getElementById('slideshow').offsetWidth;
    var objs = document.getElementsByClassName('slide');
    
//    for (var i in objs) {
    for (var i=0; i < objs.length; i++) {
        objs[i].style.width = slidewidth+"px";
//        console.log(objs[i]);
    }
    
    document.getElementById(slideItem).style.backgroundColor = "#F00";
};

function passarSlide()
{
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    document.getElementById(slideItem).style.backgroundColor = "#CCC";
    if (slideItem >= 3) {
        slideItem = 0;
    } else {
        slideItem = slideItem + 1;
    }
    
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    document.getElementById(slideItem).style.backgroundColor = "#F00";
}

function mudarSlide(slide)
{
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    
    slideItem = slide;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu()
{
    var menu = document.getElementById('menu');
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}