var  arr = [
    
        {username:"lavina123", dp:"https://plus.unsplash.com/premium_photo-1664356381529-9431be1ab66a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
        {username:"richa123",dp:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1618151313441-bc79b11e5090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"},
        {username:"rivika234",dp:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1441123694162-e54a981ceba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"},
        {username:"lavi123",dp:"https://plus.unsplash.com/premium_photo-1664356381529-9431be1ab66a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
        {username:"rich123",dp:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1618151313441-bc79b11e5090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"},
        {username:"ravi234",dp:"https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1441123694162-e54a981ceba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"}
        
    ]
var clutter = ""
arr.forEach(function(elem,iodex){
    clutter += ` <div id="story">
    <img id=${iodex} src="${elem.dp}" alt="">
</div>`
})
var stories = document.querySelector("#stories")
stories.innerHTML = clutter
var full = document.querySelector("#full")
stories.addEventListener("click",function(dets){
    full.style.display = `initial`
    full.style.backgroundImage = `url(${arr[dets.target.id].img})`

    setTimeout(function(){
    full.style.display = `none`

    },1500)
})


