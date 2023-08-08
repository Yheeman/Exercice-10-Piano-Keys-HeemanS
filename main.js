// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key) {
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = getElementsByClassName('piano')
e.target.addEventListener('mousedown', ()=> {
e.target.style.backgroundColor= "blue"
})
// Write a named function with event handler properties
const keyReturn = getElementByClassName('piano')
<<<<<<< HEAD
eventTarget.addEventListener('mouseup', ()=> {
=======
e.target.addEventListener('mouseup', ()=> {
>>>>>>> c2a22dffa88820e5b1c31be8ade51d0821f948e2
e.target.style.backgroundColor="white"
})
// Write a loop that runs the array elements through the function
keys.forEach(function(key){
  notes.push(document.getElementByClassName('piano'));
})
// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;


// Write anonymous event handler property and function for the first progress button
document.getElementById('first-next-line').hidden = function nextOne(e) {
  alert ('');
}

// Write anonymous event handler property and function for the second progress button
document.getElementById('second-text-line').on = function nextTwo(e) {
  alert ('');
}

// Write anonymous event handler property and function for the third progress button
document.getElementById('third-next-line').on = function nextThree(e) {
  alert (''); 
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}