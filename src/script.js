import { load, save, remove } from './js/storage';

const TIMER_KEY = 'timer-state';

const refs = {
  clockface: document.querySelector('.clockface'),
  startBtn: document.querySelector('.timer-btn[data-start]'),
  stopBtn: document.querySelector('.timer-btn[data-stop]'),
  clearBtn: document.querySelector('.timer-btn[data-clear]'),
};

class Timer {
  constructor({ onTick }) {
    this.timerId = null;
    this.active = false;

    this.startTime = 0;
    this.deltaTime = 0;

    this.onTick = onTick;
    this.init();
  }
  //The method displays a default time
  init() {
    this.onTick(this.getTimeComponents());
  }

  saveStateToLS() {
    save(TIMER_KEY, {
      active: this.active,
      start: this.startTime,
      delta: this.deltaTime,
    });
  }

  start() {
    //Prevent multiple timer starts
    if (this.active) return;
    //Change the state to active
    this.active = true;

    this.startTime = Date.now() - this.deltaTime;
    //Save state to localStorage timer start working
    this.saveStateToLS();

    //Refresh markup every 1 sec
    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      this.deltaTime = currentTime - this.startTime;
      const time = this.getTimeComponents(this.deltaTime);

      this.onTick(time);
      //Update state after each tick
      this.saveStateToLS();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.active = false;
    //Save to stage localStorage after press stop btn
    this.saveStateToLS();
    this.onTick(this.getTimeComponents(this.deltaTime));
  }

  clear() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.active = false;
    this.startTime = 0;
    this.deltaTime = 0;

    this.onTick(this.getTimeComponents());
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
  onTick: updateTimerInterface,
});

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});
refs.clearBtn.addEventListener('click', () => {
  timer.clear();
});

function updateTimerInterface({ hours, mins, secs }) {
  refs.clockface.textContent = `Hours: ${hours} Minutes: ${mins} Seconds: ${secs}`;
}
