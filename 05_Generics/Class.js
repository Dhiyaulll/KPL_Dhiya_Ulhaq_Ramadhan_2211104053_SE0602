class GenericList {
    constructor() {
      this.items = [];
    }
  
    add(item) {
      this.items.push(item);
    }
  
    getAll() {
      return this.items;
    }
  }
  
  const list = new GenericList();
  list.add(1);
  list.add("Hello");
  console.log(list.getAll());