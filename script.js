// export {logavatar}from "./Components/Avatar/avatar"; 
var drawer = document.querySelector('.drawer-model-menu');
var container = document.querySelector('.document-container');
var nav_hider = document.querySelector('.hide-nav');
var nav_toggler = document.querySelector('.navbar-togglers');
var nav_closer = document.querySelector('.navbar-close-toggle');

console.log(document.body.clientWidth);


jQuery(document).ready(function($) {
    alterClass();
    function alterClass(){
        if(document.body.clientWidth <= 800){
            console.log("a",document.body.clientWidth);
            drawer.classList.add('hide-nav');
            
            document.querySelector('.hide-nav').style.visibility ="hidden";
            
            document.querySelector('.container-drawer').style.visibility ="visible";
            container.addEventListener('click',()=>{
                console.log('click');
                
                document.querySelector('.hide-nav').style.transition= "0.5s";
                document.querySelector('.hide-nav').style.visibility ="hidden";
            })
        }
        else{
            console.log("b",document.body.clientWidth);
            nav_closer.style.visibility ="hidden";
            document.querySelector('.container-drawer').style.visibility ="hidden";
            if(document.querySelector('.hide-nav')){
            document.querySelector('.hide-nav').style.visibility ="visible";
            drawer.classList.remove('hide-nav')
            }

        }
    }
    $(window).resize(function(){
        alterClass();
    });
})


nav_toggler.addEventListener('click',()=>{
    console.log("tog");
    document.querySelector('.hide-nav').style.visibility ="visible";
})


nav_closer.addEventListener('click',()=>{
    console.log("tog");
    document.querySelector('.hide-nav').style.visibility ="hidden";
})