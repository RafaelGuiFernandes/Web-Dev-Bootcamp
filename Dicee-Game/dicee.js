function getRandom( max ){
    return Math.floor(Math.random() * max + 1);
}

document.querySelectorAll(".diceImg").forEach( (element) => {
    element.src = `images/dice${getRandom(6)}.png`;
});