const fs = require('fs');
const path = require('path');
 
class KuliahData {
  constructor() {
    this.data = null;
  }
 
  readJSON() {
    const filePath = path.join(__dirname, 'data_kuliah.json');
    this.data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
 
  printInfo() {
    if (!this.data) return console.log("Data belum dibaca.");
 
    console.log(`Nama Mahasiswa: ${this.data.student.name}`);
    console.log(`Kode Dosen: ${this.data.lecturerCode}`);
    
    if (Array.isArray(this.data.courses)) {
      console.log("Daftar Mata Kuliah:");
      this.data.courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.courseCode} - ${course.courseName}`);
      });
    } else {
      console.log("Tidak ada data mata kuliah.");
    }
  }
}
 
module.exports = KuliahData;