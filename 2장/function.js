/*function sayHello(name,age){
    //console.log('Hello!',name,"you have",age,"years of age.");
    console.log("Hello"+name+"you are"+age+"years old");
}

sayHello("Nicolas",15);//인자(argument) 변수같은것
console.log("Hi!")*/

/*function sayHello(name,age){
    //console.log(`Hello ${name} you are ${age} years old.`);
    return `Hello ${name} you are ${age} years old.`;
}

const greetNicolas = sayHello("Nicolas", 14)

console.log(greetNicolas)*/

const calculator={
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,5);
console.log(`${plus} ${minus}`);