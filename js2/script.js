var btn = document.querySelector("button")
var box = document.querySelector("#box")
var box2 = document.querySelector("#box2")

btn.addEventListener("click",function(){
    var color1 = Math.floor(Math.random()*255)
    var color2 = Math.floor(Math.random()*255)
    var color3 = Math.floor(Math.random()*255)
    var color4 = Math.floor(Math.random()*255)
    var color5 = Math.floor(Math.random()*255)
    var color6 = Math.floor(Math.random()*255)
    
    box.style.backgroundColor=`rgb(${color1},${color2},${color3})`
    box2.style.backgroundColor=`rgb(${color4},${color5},${color6})`
    box.style.mixBlendMode=`differenece`
})
