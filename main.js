const Stack = require("./stack");

const n = new Stack();

n.push("💑");

n.push("🌿");

n.print();

console.log(n.length());

console.log("Popped element: " + n.pop()); // 🌿
