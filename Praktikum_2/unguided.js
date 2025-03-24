const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const State = {
  START: "START",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER",
  EXIT: "EXIT"
};

let state = State.START;

function runStateMachine() {
  console.log(`Current state: ${state}`);
  
  rl.question("Enter command: ", (command) => {
    switch (state) {
      case State.START:
        if (command === "PLAY") {
          console.log("Game is starting...");
          state = State.PLAYING;
        } else if (command === "EXIT") {
          state = State.EXIT;
        } else {
          console.log("Invalid command for START state. Try 'PLAY' or 'EXIT'");
        }
        break;
        
      case State.PLAYING:
        if (command === "LOSE") {
          console.log("You lost the game!");
          state = State.GAME_OVER;
        } else if (command === "EXIT") {
          state = State.EXIT;
        } else {
          console.log("Invalid command for PLAYING state. Try 'LOSE' or 'EXIT'");
        }
        break;
        
      case State.GAME_OVER:
        if (command === "RESTART") {
          console.log("Restarting the game...");
          state = State.START;
        } else if (command === "EXIT") {
          state = State.EXIT;
        } else {
          console.log("Invalid command for GAME_OVER state. Try 'RESTART' or 'EXIT'");
        }
        break;
    }
    
    if (state === State.EXIT) {
      console.log("Exiting game. Goodbye!");
      rl.close();
    } else {
      runStateMachine();
    }
  });
}

console.log("Welcome to the Game State Machine!");
console.log("Commands: 'PLAY', 'LOSE', 'RESTART', 'EXIT'");
runStateMachine();