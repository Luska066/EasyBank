const containers = document.querySelectorAll('#container-items-choose');
const containertwos = document.querySelector('#container-items-choose')


window.addEventListener('scroll', (event)=>{


    containers.forEach(e => {
        let height =  e.getBoundingClientRect().bottom;
        console.log(height)
        if(height < 1174.5){
            containertwos.classList.remove('hidden')
            containertwos.classList.add('show')
           
        }else if (height > 1174.5){
            containertwos.classList.remove('show')
            containertwos.classList.add('hidden')
        }
       
 
      
    })
    setTimeout(()=>{
        
    },100)
   

})


/**/
