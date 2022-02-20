const AllRatingIcons = document.querySelectorAll('.rating-star-icon');

AllRatingIcons.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        console.log("clicked",item,index);
        AllRatingIcons.forEach((_item,_index)=>{
            if(_index<=index){
                _item.style.color = "#ffcc00"
            }else{
                _item.style.color ="rgb(180, 180, 180)"
            }
        })
    })
})