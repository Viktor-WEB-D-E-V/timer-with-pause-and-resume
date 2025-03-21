const refs = {
  clockface: document.querySelector('.clockface'),
  startBtn: document.querySelector('.timer-btn[data-start]'),
  stopBtn: document.querySelector('.timer-btn[data-stop]'),
};

class Timer {
  constructor(time) {
    this.time = time;

    this.init();
  }

  init() {

    const { hours, mins, secs } = this.getTimeComponents(0);
    const markup = `Hours:${hours} Minutes:${mins} Seconds:${secs}`;
    
    refs.clockface.insertAdjacentHTML('afterbegin', markup);
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}


const timer = new Timer(Date.now())