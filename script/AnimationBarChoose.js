const containers = document.querySelectorAll('#container-items-choose');
const containertwos = document.querySelector('#container-items-choose')


window.addEventListener('scroll', (event)=>{


    containers.forEach(e => {
        let height =  e.getBoundingClientRect().bottom;
        let width = window.innerWidth;

        if(height <= 1174.5){
            containertwos.classList.remove('hidden')
            containertwos.classList.add('show')
           
        }else if (height > 1174.5 ){
            containertwos.classList.remove('show')
            containertwos.classList.add('hidden')
        }

        if(height < 404.5){
            containertwos.classList.remove('show')
            containertwos.classList.add('hidden')
        }

                
        if(width <= 1200  ){
            if(height <= 1545){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height == 1545 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 250){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        } 
        

        if(width <= 1180){
            if(height < 1865){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height > 1865 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 182){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }     


                        
        if(width <= 1100  ){
            if(height < 1615){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 1615 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 182){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }

        if(width <= 1204  ){
            if(height < 1131){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 1131 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 182){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }
        
        if(width <= 820){

            if(height < 2206){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }

        
          
        if(width <= 550){

            if(height < 2503){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2503){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }


        
        if(width == 540){

            if(height < 1986){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 1986){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }

        if(width <= 500){
            if(height < 2247){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2247){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }

        if(width == 414 ){

            if(height < 2176){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2176 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }
 

        
        if(width <= 400 ){

            if(height < 2300){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height > 2300 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }  

            if(height < 320){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
        }
        
        if(width <= 396){
            if(height <= 2203){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2203 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            } 
            
            if(height < 300){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
            

        }

        if(width <= 375){
            if(height <= 1943){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 1943 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            } 
            
            if(height < 300){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
            

        }

        if(width <= 350){
            if(height <= 2202){
                containertwos.classList.remove('hidden')
                containertwos.classList.add('show')
               
            }else if (height >= 2202 ){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            } 
            
            if(height < 300){
                containertwos.classList.remove('show')
                containertwos.classList.add('hidden')
            }
            

        }
 
      
    })
    setTimeout(()=>{
        
    },100)
   

})


/**/
