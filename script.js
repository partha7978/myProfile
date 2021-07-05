const btn = document.querySelector(".btn-toggle");

const icon = document.querySelector(".icon");

const secondPageLeftContent = document.querySelector(".right-side-background");
const secondPageRightContent = document.querySelector(".left-side-background");


const firstPageProfileText = document.querySelector(".profile-text");

const thirdPageContainer = document.querySelector(".third-container");
const thirdPageHeading = document.querySelector(".project-color");




btn.addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
   
    icon.classList.toggle("fas");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("far");
    icon.classList.toggle("fa-moon");
    btn.classList.toggle("btn-color-change");
    btn.classList.toggle("dark-button-shadow");
    
    secondPageLeftContent.classList.toggle("dark-mode");
    secondPageRightContent.classList.toggle("dark-mode");

    firstPageProfileText.classList.toggle("dark-mode");
    thirdPageContainer.classList.toggle("third-page-dark-mode");
    thirdPageHeading.classList.toggle("project-color-dark-mode");
})
