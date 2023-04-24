const container = document.querySelectorAll('#container-latest');
const containerthree = document.querySelector('#container-latest')


window.addEventListener('scroll', (event)=>{
    

    container.forEach(e => {
        let height =  e.getBoundingClientRect().bottom;

        let width = window.innerWidth;
        console.log(width)
        console.log(height)
        if(height < 1305){
            containerthree.classList.remove('hidden')
            containerthree.classList.add('show')
           
        }else if (height > 1305){
            containerthree.classList.remove('show')
            containerthree.classList.add('hidden')
        }

        if(width <= 1650){
            if(height < 1799){
                containerthree.classList.remove('hidden')
                containerthree.classList.add('show')
               
            }else if (height > 1799){
                containerthree.classList.remove('show')
                containerthree.classList.add('hidden')
            }
        }

        if(width <= 980){
            if(height < 2422){
                containerthree.classList.remove('hidden')
                containerthree.classList.add('show')
               
            }else if (height > 2422){
                containerthree.classList.remove('show')
                containerthree.classList.add('hidden')
            }
        }

        
    })

})