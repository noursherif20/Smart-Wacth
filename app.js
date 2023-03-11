 let mainImg = document.querySelector(".watch .watch-color");
 let myColor = document.querySelector(".colors");
 let watchScreen = document.querySelector('.timer')
 let heartScreen = document.querySelector('.heart-rate')

 // Select Color
 let colorsArray = ["/image/black.png","/image/blue.png","/image/red.png","/image/purple.png"]

myColor.addEventListener('click',function(e){
    if (e.target.classList.contains('black')){
        mainImg.src= colorsArray[0];

    } else if (e.target.classList.contains('blue')) {
        mainImg.src= colorsArray[1];

    } else if (e.target.classList.contains('red')) {
        mainImg.src= colorsArray[2];

    } else {
        mainImg.src= colorsArray[3];
    }
})

// Choose Features
        

// set time
 let time = setInterval (function(){
    let dateNow = new Date();
    watchScreen.innerHTML=`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()} `
 }, 1000)
 

    
let btn = document.querySelector('.features');

// Adding time to watch Screen and swicth between time screen and H-rate screen.
btn.addEventListener('click',function(e){
    
    if (e.target.classList.contains('time')){

        setInterval (function(){
    let dateNow = new Date();
    watchScreen.innerHTML=`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()} `
    }, 1000)
    
        watchScreen.style.zIndex = 1;

    } 

    if (e.target.classList.contains('heart')){

        watchScreen.style.zIndex = 0;
    } 
})

