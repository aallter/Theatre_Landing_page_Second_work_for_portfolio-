/* menu mobile*/
let imgMobMenu = document.querySelector('nav>img');
console.log(imgMobMenu);
let blockMobileMenu = document.querySelector('.menu-window');
let imgCloseMobMenu = document.getElementById('close-menu');

let ShowMenuMobile = () =>{
    blockMobileMenu.classList.toggle('d-none');
}
imgMobMenu.addEventListener('click',ShowMenuMobile);
imgCloseMobMenu.addEventListener('click',function(){
    blockMobileMenu.classList.toggle('d-none'); 
});

/*SLIDE Afisha*/
let getButtonAfisha = document.querySelectorAll('.butt-prev-slide button');
console.log(getButtonAfisha);
let img = document.querySelectorAll('#prev-slider ul li');
console.log(img);
let butLeft=getButtonAfisha[0];
let butRight=getButtonAfisha[1];
//func next img and back img
let endMass = img.length - 1;
let nextImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('d-block')){
                if(i == endMass){ 
                    img[endMass].classList.remove('d-block');
                    i = 0;
                    img[i].classList.add('d-block');
                    break;
                }else{
                    img[i].classList.remove('d-block');
                    i++;
                    img[i].classList.add('d-block');
                    console.log(img[i].classList);
                    console.log(i);
                    break;
                }
        }
    }
}
let predImg =() =>{
    for(let i=0; i<img.length;i++){
        if(img[i].classList.contains('d-block')){
            if(i == 0){
                img[i].classList.remove('d-block');
                i =  endMass;
                img[i].classList.add('d-block');
                break;
            }else{
                img[i].classList.remove('d-block');
                i--;
                img[i].classList.add('d-block');
                console.log(img[i].classList);
                console.log(i);
                break;
            }
            
        }
    }
}

//func click
butRight.addEventListener('click',nextImg);
butLeft.addEventListener('click',predImg);
