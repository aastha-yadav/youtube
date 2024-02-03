var btn = document.querySelector(".screen button")
var screen = document.querySelectorAll(".screen")
var allelems = document.querySelectorAll(".elem")
var playground = document.querySelectorAll(".playground")



btn.addEventListener("click", function(){
    screen[1].style.transform = "translateY(-100%)" 
})
allelems.forEach(function(elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform = "translateY(-200%)"
        selected = elem.childNodes[3].getAttribute("src")
        var newImg = document.createElement("img")
        newImg.setAttribute("src",selected)
        
    })
})

