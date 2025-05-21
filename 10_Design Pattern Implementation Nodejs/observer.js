class Observer {
    update(message) {
      throw new Error("Method 'update()' must be implemented.");
    }
  }
  
  module.exports = Observer;