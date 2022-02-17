var headerscrolltrack = document.querySelector('.navbar-scroll-tracker');
var collapser = document.querySelector('.navbar-short-collapse');
var track = document.querySelector('.navbar-track');

var title = document.querySelector('.navbar-title');


function scroller()
{
    title.style.display = "none";
    collapser.style.position = headerscrolltrack.scrollTop > 0 ? "absolute" : "static";
    
}

