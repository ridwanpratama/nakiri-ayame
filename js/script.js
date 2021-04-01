let sound;

function generateRandomNumber() {
    return Math.floor(Math.random() * (44 - 1 + 1)) + 1;
}

function playSound() {
    let x = generateRandomNumber();
    console.log(x);

    if (sound) {
        sound.pause();
    } else {
        sound = new Audio();
    }
    sound.src = `voices/a-${x}.aac`;

    sound.play();
}

document.getElementById('soundbutton').addEventListener('click', playSound);