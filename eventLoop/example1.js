console.log("program started !");

setTimeout(function() {
    console.log("Timeout executed");
}, 1000); 

(function() {
    console.log("IIFE executed");
})();

(function() {
    console.log("IIFE execution started");

    setTimeout(function() {
        console.log("Timeout executed IIFE");
    }, 1000);

    console.log("IIFE execution finished");
})();

console.log("program execution finished");