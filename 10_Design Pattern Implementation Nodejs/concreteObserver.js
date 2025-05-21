const Observer = require("./observer");

class ConcreteObserver extends Observer {
  constructor(name, subject) {
    super();
    this.name = name;
    this.subject = subject;
    this.notificationCount = 0;
  }

  update(data) {
    this.notificationCount++;
    console.log(
      `${this.name} menerima data: ${data} (Notifikasi ke-${this.notificationCount})`
    );

    if (this.notificationCount >= 3) {
      console.log(
        `${this.name} telah menerima 3 notifikasi dan akan berhenti berlangganan.`
      );
      this.subject.detach(this);
    }
  }
}

module.exports = ConcreteObserver;