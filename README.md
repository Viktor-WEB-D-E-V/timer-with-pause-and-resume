# Timer Application

A simple Timer application built with vanilla JavaScript, HTML, and CSS. This project demonstrates how to create a timer that can start, pause, and clear, while persisting its state using the browser's localStorage.

## Features

- **Start Timer:** Begin counting time.
- **Pause Timer:** Temporarily stop the timer.
- **Clear Timer:** Reset the timer to zero.
- **State Persistence:** Saves the timer state to localStorage, allowing the timer to resume from where it left off even after a page reload.
- **Responsive UI:** Clean and simple interface styled with CSS.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/Viktor-WEB-D-E-V/timer-with-pause-and-resume.git
   ```
2. Navigate to the project folder:
   ```sh
   cd project-folder
   ```
3. Write npm install in your console:
   ```sh
   npm i 
   ```
4. Run project 
   ```sh
   npm run start 
   ```

## Usage

- **Start:** Click the **Start** button to begin the timer.
- **Pause:** Click the **Pause** button to pause the timer.
- **Clear:** Click the **Clear** button to reset the timer to `00:00:00`.
- The timer display updates every second, showing the elapsed hours, minutes, and seconds.

## File Overview

- **index.html:**  
Contains the HTML markup that structures the timer interface. It includes links to the CSS for styling and the JavaScript for functionality.

- **style.css:**  
Provides styling for the timer layout, typography, and buttons.

- **script.js:**  
Contains the `Timer` class that handles the timer logic (starting, pausing, clearing) and updates the display. It also manages state persistence through localStorage.

- **storage.js:**  
Offers helper functions (`load`, `save`, and `remove`) to interact with the browser's localStorage for saving the timer state.

## How It Works

- **Timer Logic:**  
The `Timer` class in `script.js` calculates the elapsed time by comparing the current time with the recorded start time, updating the display every second.

- **State Persistence:**  
The current state of the timer (active status, start time, and elapsed time) is saved in localStorage. On page reload, the timer retrieves this state and resumes if it was active.

- **User Interface:**  
The timer interface dynamically updates to show the time in hours, minutes, and seconds. The clean design is achieved using CSS.

## Dependencies

- Vanilla JavaScript (ES6 modules)
- HTML5
- CSS3

No additional libraries or frameworks are required.

## License

This project is licensed under the MIT License. Feel free to modify and distribute as needed.
