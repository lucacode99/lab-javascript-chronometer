class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalID = setInterval(() =>{
    this.currentTime++;
    if(callback) callback();
    }, 1000)
    
  }

  getMinutes() {
    let sumOfTime = Math.floor(this.currentTime / 60)
    return Number(sumOfTime);
 }

  getSeconds() {
    let remainingSeconds = this.currentTime % 60;
    return remainingSeconds;

  }

  computeTwoDigitNumber(value) {
    let StringOutput = value.toString();
    
    if (value < 10) {
      let valueBeneathTen = value.toString();
      return `0${valueBeneathTen}`;                          
        } else
        return StringOutput;
        }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
      this.currentTime = 0;
      
  }

  split() {
   return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`
      }
}
  

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
