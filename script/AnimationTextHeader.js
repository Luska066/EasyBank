const container = document.querySelectorAll('#text-apresentetion');
const containertwo = document.querySelector('#text-apresentetion')


window.addEventListener('scroll', (event)=>{
    

    container.forEach(e => {
        let height =  e.getBoundingClientRect().bottom;

        if(height >= 750){
            containertwo.classList.remove('hidden')
            containertwo.classList.add('show')
           
        }else if (height < 750){
            containertwo.classList.remove('show')
            containertwo.classList.add('hidden')
        }
       
 
      
    })
    setTimeout(()=>{
        
    },100)
   

})


