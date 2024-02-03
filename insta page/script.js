var arr =[
    {username: "harshita",dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1551024739-78e9d60c45ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8fDB8fHww"},
    {username: "vansh",dp:"https://images.unsplash.com/photo-1554180842-41b1dd69d588?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {username: "ravi",dp:"https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://plus.unsplash.com/premium_photo-1687832783230-a18054122631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzfGVufDB8fDB8fHww"},
    {username: "kush",dp:"https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://plus.unsplash.com/premium_photo-1664278686234-ccf46b8ebdb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fHww"},
    {username: "divya",dp:"https://images.unsplash.com/photo-1597586124394-fbd6ef244026?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {username: "lovly",dp:"https://images.unsplash.com/photo-1526929804231-3de5919d43ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1575561723050-3a69691d9700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmxzfGVufDB8fDB8fHww"}
]
var clutter = ""
arr.forEach(function(elem,idx){
    clutter+= `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
var close = document.querySelector("#close")
var view = document.querySelector("#child2")
view.innerHTML = clutter
var x = 3000
var y = x/300

var full = document.querySelector("#full")

view.addEventListener("click",function(dets){
    full.style.display = "initial"
    close.style.display = "initial"

    full.style.backgroundImage = `url(${arr[dets.target.id].img})`


    setTimeout(function(){
    full.style.display = "none"  
    },x)
})

var bar1 = document.querySelector("#bar1")
var bar2 = document.querySelector("#bar2")
var grow = 0
view.addEventListener("click",function(){
    setInterval(function(){
        if(grow <= 100){
            bar2.style.width= `${grow++}%`
        }
    },29)
    setTimeout(function(){
        grow=0
    },y);
})
close.addEventListener("click",function(){
    full.style.display = "none"
})







































