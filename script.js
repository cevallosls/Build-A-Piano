// Select all keys
const keys = document.querySelectorAll('.key');

// -- Listeners -- //
// Add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
}