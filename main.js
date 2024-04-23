/*
Problem Statement:

Write a function that takes a non-negative integer n as input 
and returns the factorial of n. 

The factorial of a non-negative integer n, denoted as n!, is the product of 
all positive integers less than or equal to n. 

For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
*/ 

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

