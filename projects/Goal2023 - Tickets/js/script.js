let btn = document.querySelectorAll(".btn-prenota")
let closeBtn = document.getElementById("close-btn")
let loginBtn = document.querySelector("#loginBtn")
let loginForm = document.getElementById("loginForm")


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
