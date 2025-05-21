const Subject = require("./subject");
const ConcreteObserver = require("./concreteObserver");

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observers dengan referensi subject
const observer1 = new ConcreteObserver("Observer 1", subject);
const observer2 = new ConcreteObserver("Observer 2", subject);

// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Beberapa kali notifikasi
subject.notify("Update 1");
subject.notify("Update 2");
subject.notify("Update 3");
subject.notify("Update 4"); 