// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        musicSound("clap","A")

    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        musicSound('hihat','S')    
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        musicSound('kick','D')
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
       musicSound('openhat','F')
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        musicSound('boom','G');
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        musicSound('ride','H');
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        musicSound('snare','J');
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        musicSound('tom','K');
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        musicSound('openhat','L')
        let audio = document.getElementById("tink");
        audio.currentTime = 0;
        audio.play();
        document.getElementById("L").classList.add("playing");
    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function musicSound(sound, letter){
    // Play A-Clap
    let audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(letter).classList.add("playing");
}
