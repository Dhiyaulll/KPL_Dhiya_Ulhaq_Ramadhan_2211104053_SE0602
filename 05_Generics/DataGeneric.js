class DataGeneric {
    constructor(data) {
      this.data = data;
    }
    
    PrintData() {
      console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
  }
  
  const dataGeneric = new DataGeneric("Dhiya Ulhaq Ramadhan dengan nim : 2211104053");
  
  dataGeneric.PrintData();
  
  console.log("=== Code Execution Successful ===");