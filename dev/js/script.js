var Burger=document.querySelector(".burger");
Main_nav=document.querySelector(".menu-bar");

Burger.addEventListener("click",function(){
    Burger.classList.toggle("active");
    Main_nav.classList.toggle("active");
});

var ignoreClickOnMeElement = document.querySelector(".menu-bar");

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    
    if(Burger.classList.contains("active")){
        
        if (!isClickInsideElement) {
            Burger.classList.toggle("active");
            Main_nav.classList.toggle("active");
        }
    }
});