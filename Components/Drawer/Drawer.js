var drawer = document.querySelector('.drawer-model');
var drawermodaloverlay = document.querySelector('.drawer-model-menu-over');
var pushdrawer = document.querySelector('.drawer-push');
var draweroverlaycontainer = document.querySelector('.drawer-container-overlay');
var drawermodal = document.querySelector('.drawer-overlay');
var drawerheadoverlay = document.querySelector('.drawer-container-header');
var drawercloseoverlay = document.querySelector('.drawer-close-modal');

var push =false
drawermodaloverlay.addEventListener('click',()=>{
    console.log('click');
    // push = push ? false : true;
    drawermodal.style.minWidth =  "20rem";
    // drawerheadoverlay.style.maxWidth = push ? "20rem" : "0";
})

var overlay =false
drawer.addEventListener('click',()=>{
    console.log('click');
    overlay = overlay ? false : true;
    draweroverlaycontainer.style.minWidth = overlay ? "20rem" : "0";
    drawerheadoverlay.style.maxWidth = overlay ? "20rem" : "0";
})

drawercloseoverlay.addEventListener('click',()=>{
    console.log('click');
    drawermodal.style.minWidth ="0";
    // drawerheadoverlay.style.maxWidth = "0";
})