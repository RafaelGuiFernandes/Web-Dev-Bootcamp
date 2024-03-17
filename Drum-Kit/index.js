var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for( let i = 0 ; i < numberOfDrumButtons ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound( key ){
    switch(key){
        case 'w':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation( currentKey ){
    activeBtn = document.querySelector("." + currentKey);

    if(activeBtn !== null ){
        activeBtn.classList.add("pressed");

        setTimeout(function(){
            activeBtn.classList.remove("pressed");
        }, 100 );
    }
}