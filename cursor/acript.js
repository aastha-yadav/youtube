var cursor = document.querySelector("#cursor")

document.addEventListener("mousemove",function(val){
    cursor.style.left = (val.x)+"px"
    cursor.style.top= (val.y)+"px"
})
console.log("aashy");