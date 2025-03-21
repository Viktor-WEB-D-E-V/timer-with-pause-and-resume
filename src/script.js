const refs = {
  clockface: document.querySelector('.clockface'),
  startBtn: document.querySelector('.timer-btn[data-start]'),
  stopBtn: document.querySelector('.timer-btn[data-stop]'),
};

class Timer {
  constructor({ onTick }) {
    this.timerId = null;
    this.active = false;

    this.onTick = onTick;
    this.init();
  }
  //The method displays a default time
  init() {
    this.onTick(this.getTimeComponents());
  }

  start() {
    //Prevent multiple timer starts
    if (this.active) return;

    const startTime = Date.now();
    //Change the state to active
    this.active = true;
    //Refresh markup every 1 sec
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.active = false;
    const time = this.getTimeComponents();
    this.onTick(time);
  }

  // The methods converts time(milliseconds) to other values, such as hours, minutes and seconds
  getTimeComponents(time = 0) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  //The methods adds 0 to the number if the string has < 2 characters
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  //
  onTick: updateTimerInterface,
});

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

function updateTimerInterface({ hours, mins, secs }) {
  refs.clockface.textContent = `Hours: ${hours} Minutes: ${mins} Seconds: ${secs}`;
}
