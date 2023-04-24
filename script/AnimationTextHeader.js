const container = document.querySelectorAll('#text-apresentetion');
const containertwo = document.querySelector('#text-apresentetion')


window.addEventListener('scroll', (event)=>{
    

    container.forEach(e => {
        let height =  e.getBoundingClientRect().bottom;

        let width = window.innerWidth;

        if(height > 569){
            containertwo.classList.remove('hidden')
            containertwo.classList.add('show')
           
        }else if (height < 571){
            containertwo.classList.remove('show')
            containertwo.classList.add('hidden')
        }

        if(width <= 1180){
            if(height > 360){
                containertwo.classList.remove('hidden')
                containertwo.classList.add('show')
               
            }else if (height < 360){
                containertwo.classList.remove('show')
                containertwo.classList.add('hidden')
            }

        }
       
 
      
    })
    setTimeout(()=>{
        
    },100)
   

})


