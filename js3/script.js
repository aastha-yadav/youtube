var istatus =document.querySelector("h4");
var btn =document.querySelector("button");
var flag = 0;
btn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*5000);
    if(flag == 0){

    istatus.innerHTML = "ReQuest Sending...";
    istatus.style.color ="rgb(217, 200, 20)";
    btn.innerHTML = "sending";

    setTimeout(function (){
        istatus.innerHTML = "Freinds";
        istatus.style.color = "green"
        btn.innerHTML = "Remove Freind";
    },a);
    flag = 1;
}
else{
    istatus.innerHTML = "ReQuest"
    istatus.style.color ="rgb(217, 200, 20)";

}
})
