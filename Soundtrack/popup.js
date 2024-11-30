// Elements
const playPauseButton = document.getElementById('playPauseButton');
const moodSelect = document.getElementById('moodSelect');
const audioPlayer = document.getElementById('audioPlayer');

// Audio files mapped to moods
const sounds = {
    calm: 'sounds/forest.mp3',
    excited: 'sounds/city.mp3',
    sad: 'sounds/rain.mp3',
    tense: 'sounds/space.mp3'
};

// Keep track of whether the audio is currently playing
let isPlaying = false;

// Play/Pause button click handler
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        // Pause the audio
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
        isPlaying = false;
    } else {
        // Play the audio based on the selected mood
        const selectedMood = moodSelect.value;
        const soundFile = sounds[selectedMood];
        
        audioPlayer.src = soundFile;
        
        // Ensure audio is loaded before playing
        audioPlayer.load();
        
        audioPlayer.play().then(() => {
            playPauseButton.textContent = 'Pause';
            isPlaying = true;
        }).catch(err => {
            console.error('Error playing audio:', err.name, err.message); // More detailed error
        });
    }
});

// Handle mood selection change
moodSelect.addEventListener('change', () => {
    if (isPlaying) {
        const selectedMood = moodSelect.value;
        const soundFile = sounds[selectedMood];

        audioPlayer.src = soundFile;
        
        // Ensure audio is loaded before playing
        audioPlayer.load();
        
        audioPlayer.play().then(() => {
            playPauseButton.textContent = 'Pause';
        }).catch(err => {
            console.error('Error playing audio:', err.name, err.message); // More detailed error
        });
    }
});
