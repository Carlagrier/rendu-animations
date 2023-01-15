let balle  = document.querySelector('.balle')
    y  = 1, 
    gravity = 1; 

    balle.addEventListener("click",()=>{setInterval(fonct=()=>{
if(y > 420) gravity = -gravity;
gravity += 1;
y += gravity;
balle.style.top = (y) + 'px';
    },100);})

