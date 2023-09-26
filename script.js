document.getElementById("bars").onclick = function(){
    var menu = document.getElementById("navbar-menu")
    menu.classList.toggle("show-menu")
}


const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.btn-next')];
const preBtn = [...document.querySelectorAll('.btn-pre')];

productContainers.forEach(function(item, i){
    let container = item.getBoundingClientRect();
    let container_width = container.width;
    nextBtn[i].addEventListener('click', function(){
        item.scrollLeft+=container_width
    })
    preBtn[i].addEventListener('click', function(){
        item.scrollLeft-=container_width;
    })
    
})