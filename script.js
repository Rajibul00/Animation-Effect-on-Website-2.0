
let picture = document.querySelectorAll('.picture');
let img =   document.querySelectorAll('img')
picture.forEach(function(val){
val.addEventListener('mouseenter',function(dets){
val.childNodes[1].style.opacity = 1
})
val.addEventListener('mouseleave',function(dets){
    val.childNodes[1].style.opacity = 0
    })
    val.addEventListener('mousemove',function(dets){
  
        val.childNodes[1].style.top= dets.y + 'px'
        })
})
