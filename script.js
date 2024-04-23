/* 
Problem Statement

You are tasked with implementing a JavaScript function to approximate the area under a curve using the trapezoidal rule.
The trapezoidal rule is a numerical method for estimating the definite integral of a function.

 Given a function \( f(x) \) and the interval \([a, b]\), the area under the curve can be approximated 
 by dividing the interval into \( n \) equal subintervals and summing the areas of trapezoids formed by adjacent points on the curve.

Your task is to write a JavaScript function `approximateArea` that takes the following parameters:

- `f`: A JavaScript function representing the curve \( f(x) \).
- `a`: The lower bound of the interval.
- `b`: The upper bound of the interval.
- `n`: The number of subintervals to use for approximation.

Your function should return an approximation of the area under the curve using the trapezoidal rule.
*/

// Good Practice

// Function to approximate the area under a curve using the trapezoidal rule
function approximateArea(f, a, b, n) {
    // Calculate the width of each subinterval
    const intervalWidth = (b - a) / n;

    let sum = 0;

    for (let i = 0; i < n; i++) {
        // Calculate the left and right endpoints of the trapezoid
        const leftX = a + i * intervalWidth;
        const rightX = a + (i + 1) * intervalWidth;

        // Calculate the height of the trapezoid using the function values at the endpoints
        const height = (f(leftX) + f(rightX)) / 2;

        // Calculate the area of the trapezoid and add it to the sum
        const area = height * intervalWidth;
        sum += area;
    }
    return sum;
}

// Test the approximateArea function with the function f(x) = x^2 on the interval [0, 1] using 100 subintervals
const area = approximateArea(x => x * x, 0, 1, 100);
console.log(area);

// Bad Solution 1: Incorrect Loop Initialization with Redundant Calculation
function badfunc1(f, a, b, n) {
    let sum = 0; 
    let h = (b - a) / n; 
    let i = 0; 

    while (i <= n) { 
        let midpoint = a + (i + 0.5) * h; 
        sum += f(midpoint); 
        i++; 
    }

    return sum * h; 
}

// Bad Solution 2: 
function badfunc2(f, a, b, n) {
    let sum = 0; 
    let h = (b - a) / n; 

    for (let i = 0; i < n; i++) { 
        let midpoint = a + (i + 0.5) * h; 
        let width = h; 

        sum += f(midpoint); 
    }

    return sum * h; 
}

// Bad Solution 3: 
function badfunc3(f, a, b, n) {
    let sum = 0; 
    let h = (b - a) / n; 

    for (let x = 0; x < n; x++) { 
        let z = a + (x + 0.5) * h; 
        let y = h; 

        sum += f(z); 
    }

    return sum * h; 
}

// Bad Solution 4: 
function badfunc4(f, a, b, n) {
    let sum = 0; 
    let h = (b - a) / n; 
    let i = 0; 

    while (i <= n) { 
        let midpoint = a + (i + 0.5) * h; 
        sum += f(midpoint); 
        i++; 
    }

    return sum * h; 
}

// Bad Solution 5: 
function badfunc5(f, a, b, n) {
    const h = (b - a) / n; 
    let sum = (f(a) + f(b)) / 2; 

    for (let i = 1; i <= n; i++) { 
        let x = a + i * h; 
        let sum = 0; 
        sum += f(x);
    }

    return sum * h; 
}