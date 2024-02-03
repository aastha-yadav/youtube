var img = document.querySelector("#box")
var icon = document.querySelector("i")
var flag = 0
img.addEventListener("dblclick",function(){
    icon.style.transform= "translate(-50%, -50%) scale(1.5)"
    setTimeout(function(){ 
        icon.style.transform= "translate(-50%, -50%) scale(0)"
        icon.style.display = "none"
    }, 700)
})
