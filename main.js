let red = 100;
let green = 100;
let blue = 100;

const changeColor = (e) => {
    // console.log(e.keyCode, e.which);
    if (e.keyCode === 40) {
        if (red <= 255) {
            red = red + 4
            green = green + 4
            blue = blue + 4
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            console.log(red);
        }
    } else if (e.keyCode === 38) {
        if (red >= 1) {
            red = red - 4
            green = green - 4
            blue = blue - 4
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            console.log(red);
        }
    }
}

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

window.addEventListener('keydown', changeColor)


// strzałka do góry 38
// strzałka w dół 40