// export {logavatar}from "./Components/Avatar/avatar"; 
var aside_main_drawer = document.querySelector('.drawer-model-menu');
var container = document.querySelector('.document-container');
var nav_hider = document.querySelector('.hide-nav');
var nav_toggler = document.querySelector('.navbar-togglers');
var nav_closer = document.querySelector('.navbar-close-toggle');

var navbar_li = document.querySelectorAll('.sidebar-body-content');

var btn_scrolltop=document.querySelector('#scroll-top-btn');
console.log(document.body.clientWidth);

// jQuery(document).ready(function($) {
alterClass();
function alterClass(){
    console.log("alter called")
    if(document.body.clientWidth <= 800){
        console.log("a",document.body.clientWidth);
        aside_main_drawer.classList.add('hide-nav');
        console.log(aside_main_drawer,nav_hider)
        nav_closer.style.display ="block";
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
        nav_closer.style.display ="none";
        document.querySelector('.container-drawer').style.visibility ="hidden";
        document.querySelector('.container-drawer').style.height = '1px'
        // aside_main_drawer.classList.remove('hide-nav')
        if(document.querySelector('.hide-nav')){
            document.querySelector('.hide-nav').style.visibility ="visible";
            aside_main_drawer.classList.remove('hide-nav')
        }

    }
}
document.body.onresize(()=>{
    alterClass();
})
// document.resize.(function(){
//     alterClass();
// });
    // $(window).resize(function(){
    //     alterClass();
    // });
// })


nav_toggler.addEventListener('click',()=>{
    console.log("tog");
    document.querySelector('.hide-nav').style.visibility ="visible";
})


nav_closer.addEventListener('click',()=>{
    console.log("tog");
    document.querySelector('.hide-nav').style.visibility ="hidden";
})

for(let i=0;i<navbar_li.length;i++){
    navbar_li[i].addEventListener('click',()=>{
        console.log('click hider')
        document.querySelector('.hide-nav').style.visibility ="hidden";
    })
}



// scroll to top
window.onscroll = function(){ 
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        btn_scrolltop.style.display ="block";
        // console.log("Scroller btn");
    }else{
        btn_scrolltop.style.display ="none";
        // console.log("Scroller btn");
    }
}

btn_scrolltop.addEventListener('click',()=>{
    console.log("Scroller click");
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
})
