let btn = document.querySelectorAll(".btn-prenota")
let closeBtn = document.getElementById("close-btn")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        form.style.display = "block";
    });
}

closeBtn.addEventListener("click", function () {
    form.style.display = "none";
})