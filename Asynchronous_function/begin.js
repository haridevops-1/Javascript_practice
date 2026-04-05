//  Asynchronous Function

// console.log("step- 1");
// console.log("step- 2");
// console.log("step- 3");

setTimeout(step_display, 4000);
setTimeout(() => console.log("step- 2"), 2000);
setTimeout(() => console.log("step- 3"), 1000);
setTimeout(() => console.log("step- 4"), 500);
function step_display(){
    console.log("step-1")
}