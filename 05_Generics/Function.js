function swap(a, b) {
    return [b, a];
}
 
let x = 5, y = 10;
[x, y] = swap(x, y);
console.log(x, y); // Output: 10, 5