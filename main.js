/*
Problem Statement:

Write a function that takes a non-negative integer n as input 
and returns the factorial of n. 

The factorial of a non-negative integer n, denoted as n!, is the product of 
all positive integers less than or equal to n. 

For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
*/ 

// Good Practice:
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
// Bad Practice 1:
function calcFact(n) {
    if (isNaN(n) || n < 0) { 
        throw new Error("Input must be a non-negative integer.");
    }
    let r = 1; 
    for (i = 1; i <= n; i++) { 
        r *= i; 
    }
    alert("The factorial is: " + r); 
    return r;
}

// Bad Practice 2:
function factorial(n) { 
    res = 1; 
    for (let i = 1; i < n; i++) {
        res *= i;
    }
    return res;
}

// Bad Practice 3:
function calculateFactorial(n) {
    for (let i = 1; i <= n; i++) {
        f *= i; 
    }
    return f;
}

// Bad Practice 4:
function calculateFactorial(n) {
    let fact = 1; 
    for (let i = 1; i <= n; i++) {
        fact = fact * i; 
    }
    return fact;
}

// Bad Practice 5:
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 0; i <= n; i++) { 
        factorial *= i;
    }
    return factorial;
}