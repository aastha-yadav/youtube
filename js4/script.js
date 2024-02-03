var btn = document.querySelector("button")
var prog = document.querySelector("#growth")
var percent = document.querySelector("h1")

var grow = 0
var flag = 0
btn.addEventListener("click",function(){
    var inter = setInterval(function() {
                    if(grow <= 100){
                    btn.innerHTML = "Downloading..."
                    var hero = grow++
                    prog.style.width = `${hero}%`
                    console.log(grow)
                    percent.innerHTML=`${hero}%`
                    }
                }, 50)
    
    setTimeout(function(){
        btn.innerHTML="Downloaded"
        btn.style.backgroundColor = "green"
        clearInterval(inter)
    }, 5050);
    setTimeout(function(){
        btn.innerHTML = "delete file"
        btn.style.backgroundColor = "red"

        
    },6350);
})




    

