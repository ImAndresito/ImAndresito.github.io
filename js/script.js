///// --------------- TEXT ANIMATION --------------- //// 

let text = document.getElementById("txt2");


const changeTxt = () => {
    text.innerHTML = "Edson Andres Villa Sanchez";
    setTimeout(() => {}, 0);
    setTimeout(() => {
        text.innerHTML = "Just call me";
    }, 4000);
    setTimeout(() => {
        text.innerHTML = "Andres Villa";
    }, 8000);
    // 1000 milliseconds ----> 1s
}
changeTxt();

///// --------------- Dark / Light Mode --------------- //// 

let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("lightMode")
let newStyleDmode = document.head.appendChild(document.createElement("style"));


darkMode.addEventListener("click", function () {
    darkMode.style.display = "none";
    lightMode.style.display = "block";
    document.body.style.backgroundColor = "#1C1A26";
    newStyleDmode.innerHTML = ".txt2 {background: -webkit-linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(252, 252, 252) 0%, rgba(244, 67, 54, 1) 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent; } .txt2:before {background-color: #1C1A26;} .white {color: #fff} .projectsContainer .pTitle {color: #fff}";
    document.body.style.color = "#fff";
    document.querySelector(".svgGit").getSVGDocument().getElementById("gitChangeColor").setAttribute("fill", "#fff");
    document.querySelector(".svgMail").getSVGDocument().getElementById("mailChangeColor").setAttribute("fill", "#fff");
    document.getElementById("sqlImg").style.display = "none";
    document.getElementById("sqlWImg").style.display = "block";
})

lightMode.addEventListener("click", function () {
    lightMode.style.display = "none";
    darkMode.style.display = "block";
    document.body.style.backgroundColor = "#F4EFEC";
    newStyleDmode.innerHTML = "";
    document.body.style.color = "#000";
    document.querySelector(".svgGit").getSVGDocument().getElementById("gitChangeColor").setAttribute("fill", "#000");
    document.querySelector(".svgMail").getSVGDocument().getElementById("mailChangeColor").setAttribute("fill", "#000");
    document.getElementById("sqlImg").style.display = "block";
    document.getElementById("sqlWImg").style.display = "none";
})
