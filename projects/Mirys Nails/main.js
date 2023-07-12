function openNav(){
    document.getElementById("nav").style.transform = "translateY(100%)";
    document.getElementById("nav").style.zIndex = "8";
    document.getElementById("menu-openBtn").style.display = "none";
    document.getElementById("menu-closeBtn").style.display = "block";
    document.getElementById("menu-closeBtn").style.zIndex = "9";
    document.getElementsByTagName("html", "body")[0].style.overflow = "hidden";
}

function closeNav(){
    document.getElementById("nav").style.transform = "translate(0)";
    document.getElementById("nav").style.zIndex = "0";
    document.getElementById("menu-openBtn").style.display = "flex";
    document.getElementById("menu-closeBtn").style.zIndex = "0";
    document.getElementsByTagName("html", "body")[0].style.overflow = "auto";
}

var myIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("imgSlide");
    console.log(x);
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
        console.log("sto funzionando");
    } myIndex++;
    if (myIndex > x.length)
    { myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2500);
}
