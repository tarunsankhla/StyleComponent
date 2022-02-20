var theme_btn = document.querySelector('.checkbox-theme-mode');
var lightmode ="light-mode";
var darkmode ="dark-mode";
// localStorage.setItem("tangen-UI-theme","dark-mode")
var modetheme = localStorage.getItem("tangen-UI-theme")

if(modetheme == darkmode){
    console.log("dark")
    document.body.classList.toggle(darkmode);
}

if(modetheme == lightmode){
    console.log("light")
    document.body.classList.remove(darkmode);
}


theme_btn.addEventListener('click',themeModeFunction);
function themeModeFunction() {
    console.log("dark mode")
    if(localStorage.getItem("tangen-UI-theme") == lightmode){
        document.body.classList.toggle(darkmode);
        localStorage.setItem("tangen-UI-theme","dark-mode")
    }else if(localStorage.getItem("tangen-UI-theme") == darkmode){
        document.body.classList.remove(darkmode);
        localStorage.setItem("tangen-UI-theme","light-mode")
    }
 }

//  themeModeFunction();