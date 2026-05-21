// Variables
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// Select all keys
const keys = document.querySelectorAll('.key');

// -- Listeners -- //
// Add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key) {
    // Get the note's letter value
    const noteAudio = document.getElementById(key.dataset.note);
    
    // Reset the note's current time to 0
    noteAudio.currentTime = 0;

    // Play the note
    noteAudio.play();

    // Add a class, active, for styling purposes
    key.classList.add('active');

    // Listen for when the sound has ended and remove 'active' class
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}

// -- Twinkle Twinkle -- //
  // Notes: CCGGAAG, FFEEDDC, GGFFEED x2, CCGGAAG, FFEEDDC
  // Melody note sequence referenced from:
  // https://www.hoffmanacademy.com/blog/how-to-play-twinkle-twinkle-little-star-on-the-piano

  const twinkleTwinkle = [
    "C", "C", "G", "G", "A", "A", "G",
    "F", "F", "E", "E", "D", "D", "C",
    "G", "G", "F", "F", "E", "E", "D",
    "G", "G", "F", "F", "E", "E", "D",
    "C", "C", "G", "G", "A", "A", "G",
    "F", "F", "E", "E", "D", "D", "C"
];

// Play song when button is clicked
const songButton = document.getElementById("play-twinkle");
if (songButton) songButton.addEventListener("click", playTwinkle);

function playTwinkle() {
    let delay = 0;

    twinkleTwinkle.forEach((note) => {
        setTimeout(() => {
            const key = document.querySelector(`.key[data-note="${note}"]`);
            if (key) playNote(key);  // reuse existing playNote function
        }, delay);

    delay += 650;  // medium tempo
    })
}

// -- Keyboard User Input -- //
// Allows user to play piano using keyboard
document.addEventListener('keydown', (e) => {
    // Get the key that triggered the event
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
  
    // If the key is being held down, don't play the note again
    if (e.repeat) {
        return;
    }

    if (whiteKeyIndex > -1) {
      playNote(whiteKeys[whiteKeyIndex]);
    }
  
    if (blackKeyIndex > -1) {
      playNote(blackKeys[blackKeyIndex]);
    }
  });
