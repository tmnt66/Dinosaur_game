// Variables 
let moveright = 50;
moveleft = 50;
const jump = new Audio('jump.mp3')
const back = new Audio('music.mp3')



// back.play();
document.onkeydown = function (e) {
    let key = e.keyCode;
    // console.log(key)
    if (key == 38) {
        dino = document.querySelector('.dino')
        dino.classList.add("animatedino");
        jump.play();
        setTimeout(() => {
            dino.classList.remove("animatedino");
        }, 1200)

    }
    if (key == 39 && moveright < 1200) {
        dino = document.querySelector('.dino')
        moveright = moveright + 50;
        dino.style.left = `${moveright}px`
        // console.log(moveright)
    }
    if (key == 37 && moveright > 50) {
        dino = document.querySelector('.dino');
        moveright = moveright - 50;
        dino.style.left = `${moveright}px`
    }

}


// Game over 
let score = 0;
let level=1;
setInterval(() => {
    dino = document.querySelector('.dino');
    bowser = document.querySelector('.bowser');
    dpl = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    bpr = parseInt(window.getComputedStyle(bowser, null).getPropertyValue('left'));
    dpb = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    bpb = parseInt(window.getComputedStyle(bowser, null).getPropertyValue('bottom'));
    if (Math.abs(dpl - bpr) < 10 && Math.abs(dpb - bpb) < 100) {
        console.log(Math.abs(dpl - bpr) + "LEFT", Math.abs(dpb - bpb))
        gameover = document.querySelector('.gameover');
        bowser.classList.remove('bowser-anim')
        gameover.style.visibility = "visible";
    }
    if (Math.abs(dpl - bpr) < 100 && Math.abs(dpb - bpb) > 130) {
        setTimeout(()=>{

            score = score + 1;
            document.querySelector('#count').innerHTML = `${score}`
        },500);

        if(score>level*100){
level=level+1;
            anim = document.querySelector(".bowser-anim");
            speed = parseInt(window.getComputedStyle(anim, null).getPropertyValue('animation-duration'));
            console.log(speed)
            speed2 = speed - 0.01;
            anim.style.animationDuration = speed2 + "s";
        }

    }

    // console.log(Math.abs(dpl - bpr), Math.abs(dpb - bpb))
}, 10)