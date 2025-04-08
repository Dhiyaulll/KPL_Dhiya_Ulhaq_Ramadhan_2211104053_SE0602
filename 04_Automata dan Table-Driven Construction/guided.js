const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START", GAME: "GAME", PAUSE: "PAUSE", EXIT: "EXIT"
};
let state = State.START; function runStateMachine() {
    console.log(`${state} SCREEN`); rl.question("Enter Command: ", (command) => {
        switch (state) {
            case State.START:
                if (command === "ENTER") state = State.GAME; else if (command === "QUIT") state = State.EXIT; break;
            case State.GAME:
                if (command === "ESC") state = State.PAUSE; break;
            case State.PAUSE:
                if (command === "BACK") state = State.GAME;
                else if (command === "HOME") state = State.START; else if (command === "QUIT") state = State.EXIT; break;
        }
        if (state !== State.EXIT) {
            runStateMachine();
        } else {
            console.log("EXIT SCREEN"); rl.close();
        }
    });
}

runStateMachine();
