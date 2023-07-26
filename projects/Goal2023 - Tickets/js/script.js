let btn = document.querySelectorAll(".btn-prenota")
let closeBtn = document.getElementById("close-btn")
let loginBtn = document.querySelector("#loginBtn")
let loginForm = document.getElementById("loginForm")

let l1 = document.getElementById("location-1")
let l2 = document.getElementById("location-2")
let l3 = document.getElementById("location-3")

let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        form.style.display = "block";
        loginForm.style.display = "none";
    });
}

closeBtn.addEventListener("click", function () {
    form.style.display = "none";
})

loginBtn.addEventListener("click", function () {
    loginForm.style.display = "block";
    form.style.display = "none";
})


document.getElementById("overlay").addEventListener("click", function () {
    loginForm.style.display = "none";
    form.style.display = "none";
})

l1.addEventListener("click", function () {
    img1.style.display = "block"
    img2.style.display = "none"
    img3.style.display = "none"
})

l2.addEventListener("click", function () {
    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "none"
})
l3.addEventListener("click", function () {
    img1.style.display = "none"
    img2.style.display = "none"
    img3.style.display = "block"
})
