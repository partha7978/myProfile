const btn = document.querySelector(".btn-toggle");
const icon = document.querySelector(".icon");
const secondPageLeftContent = document.querySelector(".right-side-background");
const secondPageRightContent = document.querySelector(".left-side-background");
const firstPageProfileText = document.querySelector(".profile-text");
const thirdPageContainer = document.querySelector(".third-container");
const thirdPageHeading = document.querySelector(".project-color");
const contactPageImage = document.querySelector(".contact-image");
const neuromorphismSchool = document.querySelector(".school-image");
const neuromorphismCollege = document.querySelector(".college-image");
const neuromorphismUniversity = document.querySelector(".university-image");

btn.addEventListener("click",  () => {
    darkMode();
    firstPage();
    secondPage();
    thirdPage();
    contactPage();
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

    neuromorphismSchool.classList.toggle("neuromorphism");
    neuromorphismCollege.classList.toggle("neuromorphism");
    neuromorphismUniversity.classList.toggle("neuromorphism");
}

const thirdPage = () => {
    thirdPageContainer.classList.toggle("third-page-dark-mode");
    thirdPageHeading.classList.toggle("project-color-dark-mode");
}

const contactPage = () => {
    contactPageImage.classList.toggle("contact-image-dark");
}


//for system theme detection and set the theme according to that
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // window.location.reload(); //for reloding
 console.log("dark mode detected");   // dark mode
    darkMode();
    firstPage();
    secondPage();
    thirdPage();
    contactPage();
   


    setTimeout(() => {
        alert("The website is in dark mode, You can also try the light mode by clicking on the top right corner icon.")
    }, 3000);
    
}
else
{
    console.log("light mode detected"); // light mode

    setTimeout(function() {
        alert("The website is in light mode, You can also try the dark mode by clicking on the top right corner icon.")
    }, 3000);
}