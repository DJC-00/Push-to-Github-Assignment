// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function sigma(num) {
    var sum = 0
    for (i = 0 ; i <= num ; i ++) {
        sum += i
    }
    return sum
}

function recursiveSigma(num) {
    if (num == 0) {
        return 0
    } else {
        return num + recursiveSigma(num - 1)
    }
}

recursiveSigma(5)

// ========================================================
// Recursive Factorial
// ========================================================

// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function recursiveFactorial(num) {
    num = Math.floor(num)
    if(num < 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));

// ========================================================
// Recursive Fibonacci
// ========================================================

// Given a number, add the collective sum up to that number (using Fibonacci sequence)

// F0    F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    
// 0    1    1    2    3    5    8    13    21    34    55    

function recursiveFibonacci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
    }
}


const fib = ( n, x = 1, y = 0 ) => ( n == 0 ) ? y : fib( n - 1, x + y, x );
console.log( fib( 100 ) )