// Arrow Function

// function - we get this function from the JS engine
// function x(){
//     const a = 10;
// }

// var xyz = 30; // these variables gets hoisted

// x(); //functional execution context is created

// Data structure for memory storage - heap(memory heap)

// var x = function (){
//     console.log("I am an anonymous function");
// }

// x();

// function test(x){
//     return function(){

//     }
// }


// in ES6 they released arrow function
// const fn = () => { // fat arrow, resembles to lamba function
     // only diff is about the this variable
// }

// console.log(this);

// const obj = {
//     fn: function(){
//         console.log(this);
//     },
//     fn2: () => {
//         console.log(this);
//     }
// }

// obj.fn(); // this gives fn
// obj.fn2(); // this gives window


// function x(){
//     console.log(this);
//     function y(){
//         console.log(this);
//         function z(){
//             console.log(this);
//         }
//         z();
//     }
//     y();
// }
// x();

// const person = {
//     name: "Aman",
//     print: function (){
//         console.log(this);
//     }
// }

// const person2 = {
//     name: "Jai",
// }

// this depends on how print function is being called
// person.print();
// below 2 are same references the global this variable
// person.print.call();
// person.print.call(this); 
// person.print.call(person2);
// person.print.call(person);

// call, apply and bind can change the value of this

// Function.prototype.call(this); // whatever we pass becomes the this for the function

// function x(){
//     console.log(this);
// }

// x();
// x.call(this); //both are same
// x.call(person2);
// x.call(person);

// how we call the function determine what the this will be.




// const obj = {
//     name:"Aman",
//     print: () => {
//         console.log(this);
//     },
//     print1: function () {
//         console.log(this);
//     }
// }

// const obj2 = {
//     name: "Jai",
// }
// obj.print();
// obj.print1();
// obj.print.call();
// obj.print1.call();


/*
INTERVIEW TIPS

Luck

A person can be a good Software Engineer but a Bad Interviewer

people who have joined just months ago are asked to take interview

Most companies don't train their interviews well, candidate suffers

LUCK - Can't control

Can control

- Out preparation
    - (50%) technical skills - 5/5 days
        - everyone knows what to study
    - (50%) communication skills - 0/5 days
        - speak your thoughts while you code
            - practice to speak even when you're coding alone
        - If you can't explain, then interviewer thinks you don't know
        - you don't work alone in the company
            - companies expect you to have good communication skills
            It's a brutal truth, you should know english
        - mock interviews
    - Preparation on the interview day
        - you should not be hustling at last moment
        - pen/paper with you
        - charger
        - water bottle
        - keep your camera open
        - keep your phone on slient
        - no internet disruption

    CONFIDENCE COMES FROM PREPARATION
    (not just your technical prep)

    If you mess up your interview don't worry about it
    Don't expect all interviews to be good
    
*/