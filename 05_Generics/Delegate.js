function genericDelegate(callback, value) {
    callback(value);
}
 
genericDelegate(console.log, "Event Triggered");