var box = document.querySelector('.box')
var page1abs = document.querySelector('.page1abs')
var line1 = document.querySelector('#line1')
var line2 = document.querySelector('#line2')

var flag = 0
box.addEventListener('click',function(){
  if(flag===0){
     page1abs.style.top = '0%'
     line1.style.rotate = '45deg'
     line2.style.rotate = '-45deg'
     box.style.justifyContent = 'center'
     flag = 1
  }
  else{
    page1abs.style.top = '-100%'
    line1.style.rotate = '0deg'
    line2.style.rotate = '0deg'
    box.style.justifyContent = 'space-between'

    flag =0
  }
})