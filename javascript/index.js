const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  let actualTime = chronometer.split ()
  minDecElement.innerText = actualTime[0] 
  minUniElement.innerText = actualTime[1]
  secDecElement.innerText = actualTime[3]
  secUniElement.innerText = actualTime[4]
}


function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let timeStamps = document.createElement('li');
  //console.log(splitsElement); 
  splitsElement.append(timeStamps);

  timeStamps.innerHTML = `${minDecElement.innerText}${minUniElement.innerText}:${secDecElement.innerText}${secUniElement.innerText}`
  
  
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop'
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  
  if (btnLeftElement.className.includes('start')) {
    setStopBtn();
    setSplitBtn()
    chronometer.start(printTime)
  } else if (btnLeftElement.className.includes('stop')) {
    setStartBtn();
    setResetBtn();
    
  }
       
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.className.includes('reset')){
    //setSplitBtn();
    
  } else if (btnRightElement.className.includes('split')){
  //setResetBtn();
  printSplit()
}
 
});
