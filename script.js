const inputs = document.querySelectorAll(".input");

let width,amount,time;
    [width,amount,time] = [...inputs];

const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault();
})


const button = document.getElementById('btn');
button.addEventListener('click', run);
let animationObject = "";
const playground = document.getElementById('playground');
function getValue (){
    let widthValue ;
    if(width.value>=5 && width.value<=15){
       widthValue = width.value;
    }
    else{
        widthValue = 15;
    }
    
    let amountValue = parseInt(amount.value);
    let timeValue = time.value;
    return animationObject = {
        widthValue,
        amountValue,
        timeValue
    };

}

function run (){
    playground.innerHTML= "";
    getValue();
    console.log(animationObject.widthValue);
    for ( i= 0; i<animationObject.amountValue;i++){
        playground.innerHTML +=`
    <div class="ball"></div>
    `
    }
    
    
    const balls = playground.querySelectorAll('.ball');
    balls.forEach(ball=>{
        const setBg = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            ball.style.backgroundColor = "#" + randomColor;
          }
        ball.style.width =`${animationObject.widthValue}px`;
        ball.style.height =`${animationObject.widthValue}px`;
       
          const setPosition = () =>{
            let randomTop = Math.floor((Math.random())
            *1000);
            let randomleft = Math.floor((Math.random())
            );
            ball.style.transform = `translate(${randomleft}px,${randomTop}px)`;
    
          }
        const timer = setInterval(setBg,100);
        const timer2 = setInterval(setPosition,1000)
        setTimeout(function(){
            clearInterval(timer);
            clearInterval(timer2)
        },(animationObject.timeValue)*1000+1000);
    })

}







