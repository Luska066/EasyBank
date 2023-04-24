const buttonLine = document.querySelector('#hd>.bt-requestInvite')
const ulLine = document.querySelector('#hd>ul');
const hd = document.querySelector('#hd');
const burger = document.querySelector('.burguer');

function showMenuBurguer(){
    ulLine.style.display = 'none';
    buttonLine.style.display = 'none';
    hd.style.padding= '40px'
    hd.style.alignItems = 'center'
    hd.style.justifyContent = 'space-between'
    burger.style.display = 'block'
}

function hiddenMenuBurguer(){
    ulLine.style.display = 'flex';
    hd.style.padding= '0px'
    burger.style.display = 'none'
    hd.style.justifyContent = 'space-around'
    buttonLine.style.display = 'flex';
}


function AnimationBar (buttonLine,ulLine){
  
    setInterval(()=> {
    let width = window.innerWidth;  

        if(width <= 780){
            showMenuBurguer()
        }else if( width > 780){
            hiddenMenuBurguer()
        }

    },500)

}

AnimationBar(buttonLine,ulLine);
