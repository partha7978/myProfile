const btn = document.querySelector(".btn-toggle");
const icon = document.querySelector(".icon");
const secondPageLeftContent = document.querySelector(".right-side-background");
const secondPageRightContent = document.querySelector(".left-side-background");
const firstPageProfileText = document.querySelector(".profile-text");
const thirdPageContainer = document.querySelector(".third-container");
const thirdPageHeading = document.querySelector(".project-color");

btn.addEventListener("click",  () => {
   darkMode();
    firstPage();
    secondPage();
    thirdPage();
})

const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

const firstPage = () => {
    icon.classList.toggle("fas");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("far");
    icon.classList.toggle("fa-moon");
    btn.classList.toggle("btn-color-change");
    btn.classList.toggle("dark-button-shadow");
    //These are for the dark mode button 
    firstPageProfileText.classList.toggle("dark-mode");
}

const secondPage = () => {
    secondPageLeftContent.classList.toggle("dark-mode");
    secondPageRightContent.classList.toggle("dark-mode");
}

const thirdPage = () => {
    thirdPageContainer.classList.toggle("third-page-dark-mode");
    thirdPageHeading.classList.toggle("project-color-dark-mode");
}



//for system theme detection and set the theme according to that
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
 console.log("dark mode detected");   // dark mode
    darkMode();
    firstPage();
    secondPage();
    thirdPage();
}
else
{
    console.log("light mode detected"); // light mode
}