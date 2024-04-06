let  butto=document.querySelector("a");
butto.addEventListener("mousemove", function(e){
    let position=e.clientX*5;
    butto.style.setProperty("--position", position + "deg");
    
});

document.querySelector("span").addEventListener("mouseenter", function(){
    this.classList.add("b");

});

//Slider

var imgSlides=$(".images");
 for(let i = 0; i < imgSlides.lenght; i++){
    imgSlides[i].removeClass("images").addClass("ee");

 }

 function mySlides(i){
        i
 }