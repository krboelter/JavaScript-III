/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. The window binding is the global "this" keyword that allows access to the window methods.
* 2. Implicit binding allows you to use "this" with a preceeding dot "this.age".  You use it within an object.
* 3. New binding is when you are making a constructor and you need to refer to the object.
* 4. Explicit binding is when you use context such as .call or .apply, "this" is explicitly implied.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const sayHello = {
    greeting: 'hello',
    name: 'Ken',
    talkToMe: function(){
        console.log(`${this.greeting} ${this.name}`);
    }
}

sayHello.talkToMe();

// Principle 3

function Person(attribute){
    this.name = attribute.name;
    this.lastName = attribute.lastName;
    this.age = attribute.age;
    this.speak = function(){
        console.log(`Hello! My name is ${this.name} ${this.lastName}`);
    }
}

const ken = new Person({
    name: 'Ken',
    lastName: 'Boelter',
    age: 25
});

ken.speak();

// Principle 4

const newPerson = {
    name: 'Delaney',
    lastName: 'Boelter'
}

ken.speak.call(newPerson);