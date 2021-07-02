const btn = document.querySelector(".btn-toggle");

const icon = document.querySelector(".icon");

btn.addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
   
    icon.classList.toggle("fas");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("far");
    icon.classList.toggle("fa-moon");
    btn.classList.toggle("btn-color-change");
    btn.classList.toggle("dark-button-shadow");

})
