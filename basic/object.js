const person ={
    name: "Aravinth",
    age: 20,
    display: function() {
        return "Name: " + this.name +'\n' + "Age: " + this.age;
    },
    greet : function(){
        return "Hello, " + this.name + "!";
    }
}

console.log(person.display());
console.log(person.greet());