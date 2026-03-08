1️. What is the difference between var, let, and const?
answer : 
    Here is the difference between var, let and const 
    1.var: var is a keyword that used to declare variables in JavaScript.It is function-scoped, it can be redeclared, it can be updated, and it is hoisted.var allows to declare the same variable name multiple times in the same scope which often leads to bugs.

    2.let and const : let and const  are also a keyword that used to declare variables in javaScript. let and const both are block-scoped. They are also hoisted they enter a Temporal Dead Zone (TDZ).If i try to access them before the line where they are defined, the engine throws a ReferenceError. let allows the change the value later but const doesn't allow to change the value later. let and const both are introduced in ECMAScript 2015 (ES6).


2️. What is the spread operator (...)?
answer: 
    Spared operator (...) is a powerful tool in javaScript its commonly used to copy, combine, or manipulate arrays without modifying the original data. 
    here is some example:
    for coping => 
         const original = [1, 2, 3];
         const copy = [...original]; //output => [1, 2, 3]

    for  Modify =>
        const user = { name: 'Morsalin', role: 'Developer' };
        const updatedUser = { ...user, role: 'Senior Developer' };

        // output: { name: 'Morsalin', role: 'Senior Developer' }    

3️. What is the difference between map(), filter(), and forEach()?
answer:
        Here is the difference between map(), filter(), and forEach()
        1. forEach():
        forEach() is a method in JavaScript. it's like standard for loop. but forEach() is simply a more readable version of a standard for loop. It provides a clean, readable way to loop through elements without writing traditional for or while loops. but it doesn't return a value.
        example : 

        const numbers = [2, 4, 6];
        numbers.forEach(num => console.log(num * 2));  // output Logs 4, 8, 12
        // 'numbers' remains [2, 4, 6]

        2. map():
        map() is a js method that used to creates a new array by applying a function to each element of an existing array. This is one of the most used methods in modern frameworks.
        example:
        const numbers = [1, 2, 3];
        const doubled = numbers.map(num => num * 2); 
        // doubled = [2, 4, 6]

        3. filter():
        filter() is a js array method that used to creates a new array containing only the elements from the original array that pass a specific condition.
        example: 

        const numbers = [1, 2, 3, 4, 5, 6];
        const evens = numbers.filter(num => num % 2 === 0);
        // evens = [2, 4 ,6]

4️. What is an arrow function?
answer: 
       An arrow function is a more concise way to write function expressions in JavaScript, it's introduced in ES6.
       it can be useful in certain contexts like callbacks or event handlers.
       example :

            const sayHello = (name) => {
             return `Hello ${name}`;
            };
5️. What are template literals?
answer:
       Template literals are a modern JavaScript feature, introduced in ES6 (ECMAScript 2015), that offer a flexible and readable way to work with strings. it's defined by backticks (``). They offer a much more readable and flexible syntax compared to traditional single (') or double (") quotes.

       example: 

       const name = "Morsalin";
       const status = "developer";
       console.log(`Hello, ${name}! You are a ${status}.`);