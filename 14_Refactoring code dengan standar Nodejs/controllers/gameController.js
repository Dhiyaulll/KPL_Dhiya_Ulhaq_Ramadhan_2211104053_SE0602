const readline = require('readline');
const State = require('../models/stateModel');

/**
 * GameController menangani transisi state berdasarkan perintah pengguna.
 */
class GameController {
  constructor() {
    this.state = State.START;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  /**
   * Memulai loop state machine.
   */
  start() {
    console.log('Welcome to the Game State Machine!');
    console.log("Perintah: 'PLAY', 'LOSE', 'RESTART', 'EXIT'");
    this.runStateMachine();
  }

  runStateMachine() {
    console.log(`State saat ini: ${this.state}`);

    this.rl.question('Masukkan perintah: ', (command) => {
      this.handleCommand(command);
    });
  }

  /**
   * Memproses perintah dan memperbarui state.
   * @param {string} command - Input perintah dari pengguna.
   */
  handleCommand(command) {
    switch (this.state) {
      case State.START:
        if (command === 'PLAY') {
          console.log('Game dimulai...');
          this.state = State.PLAYING;
        } else if (command === 'EXIT') {
          this.state = State.EXIT;
        } else {
          console.log("Perintah tidak valid untuk state START. Gunakan 'PLAY' atau 'EXIT'.");
        }
        break;

      case State.PLAYING:
        if (command === 'LOSE') {
          console.log('Anda kalah!');
          this.state = State.GAME_OVER;
        } else if (command === 'EXIT') {
          this.state = State.EXIT;
        } else {
          console.log("Perintah tidak valid untuk state PLAYING. Gunakan 'LOSE' atau 'EXIT'.");
        }
        break;

      case State.GAME_OVER:
        if (command === 'RESTART') {
          console.log('Memulai ulang game...');
          this.state = State.START;
        } else if (command === 'EXIT') {
          this.state = State.EXIT;
        } else {
          console.log("Perintah tidak valid untuk state GAME_OVER. Gunakan 'RESTART' atau 'EXIT'.");
        }
        break;

      default:
        break;
    }

    if (this.state === State.EXIT) {
      console.log('Keluar dari game. Sampai jumpa!');
      this.rl.close();
    } else {
      this.runStateMachine();
    }
  }
}

module.exports = GameController;