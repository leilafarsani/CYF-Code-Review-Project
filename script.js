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
