const readline = require('readline');
const BankTransferConfig = require('../config/BankTransferConfig');
 
class BankTransferApp {
  constructor() {
    this.config = new BankTransferConfig().config;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
 
  askQuestion(query) {
    return new Promise(resolve => this.rl.question(query, resolve));
  }
 
  async run() {
    const lang = this.config.lang;
 
    const promptAmount = lang === "en" ?
      "Please insert the amount of money to transfer: " :
      "Masukkan jumlah uang yang akan di-transfer: ";
 
    const amountStr = await this.askQuestion(promptAmount);
    const amount = parseFloat(amountStr);
 
    const fee = amount <= this.config.transfer.threshold
      ? this.config.transfer.low_fee
      : this.config.transfer.high_fee;
 
    const total = amount + fee;
 
    if (lang === "en") {
      console.log(`Transfer fee = ${fee}`);
      console.log(`Total amount = ${total}`);
    } else {
      console.log(`Biaya transfer = ${fee}`);
      console.log(`Total biaya = ${total}`);
    }
 
    console.log(lang === "en" ? "Select transfer method:" : "Pilih metode transfer:");
    this.config.methods.forEach((method, idx) => {
      console.log(`${idx + 1}. ${method}`);
    });
 
    await this.askQuestion(lang === "en" ? "Choose a method (press Enter after): " : "Pilih metode (tekan Enter setelah): ");
 
    const confirmationPrompt = lang === "en" ?
      `Please type "${this.config.confirmation.en}" to confirm the transaction: ` :
      `Ketik "${this.config.confirmation.id}" untuk mengkonfirmasi transaksi: `;
 
    const confirmationInput = await this.askQuestion(confirmationPrompt);
 
    if (
      (lang === "en" && confirmationInput.trim().toLowerCase() === this.config.confirmation.en) ||
      (lang === "id" && confirmationInput.trim().toLowerCase() === this.config.confirmation.id)
    ) {
      console.log(lang === "en" ? "The transfer is completed" : "Proses transfer berhasil");
    } else {
      console.log(lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan");
    }
 
    this.rl.close();
  }
}
 
module.exports = BankTransferApp;