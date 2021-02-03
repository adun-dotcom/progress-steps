const previousBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const progressNum = document.querySelectorAll('.curve')
const progressBlue = document.querySelector('.progress')

let currentActive = 1
nextBtn.addEventListener('click',function(){
    currentActive++
    updateClick()
    
})

previousBtn.addEventListener('click',function(){
    currentActive--
    updateClick()
})


function updateClick(){
    progressNum.forEach((curve, index)=>{
        currentActive < progressNum.length
        if(index < currentActive){
            curve.classList.add('active')
        } else {
            curve.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
   
  progressBlue.style.width =  (actives.length-1) / (progressNum.length-1) * 100 + '%'

  if(currentActive === 1){
      previousBtn.disabled = true
  } else if(currentActive === progressNum.length){
    nextBtn.disabled = true
  } else{
      previousBtn.disabled = false
      nextBtn.disabled = false
  }
}