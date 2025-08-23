// setTimeout(() => {
    
// console.log("The Time is Done");
// }, 2);

// console.log("Hello World");

const fetchData = (callback) => {
    setTimeout(() => {
        callback("Done");
    }, 3000);
};

setTimeout (() =>{
    fetchData( (data) => {
        console.log(data);
    })
,5000})