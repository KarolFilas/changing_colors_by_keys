let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

const changeColor = (e) => {
    console.log(e);
}

window.addEventListener('keydown', changeColor)

