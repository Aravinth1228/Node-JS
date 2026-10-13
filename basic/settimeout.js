 console.log("Start");
 setTimeout(() => {
    console.log("This is settimeout");
    clearInterval(interval);
 }, 5000);

 console.log("End");

 const interval = setInterval(() => {
    console.log("This is interval");
 }, 1000);