var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkY0O3_0d3P7KkcbyfXuJgAqDt4r80ATog5RNz20q3Q&s)`
        flag=1
    }
    else{
        bulb.style.backgroundImage = `none`
        flag  = 0
    }
    

   
})
