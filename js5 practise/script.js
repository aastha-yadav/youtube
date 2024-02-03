var button = document.querySelector("#button")
var heart = document.querySelector("#heart")
var flag = 0
var icon = 
button.addEventListener("click",function(){
    if(flag == 0){
        heart.style.display ="initial"
        button.style.display = "none"
        red.style.display = "initial"
        flag = 1
    }
})
red.addEventListener("click",function(){
    if(flag == 1){
        red.style.display = "none"
        button.style.display = "initial"
        heart.style.display = "none"
        flag = 0
    }
})
