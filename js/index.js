const a = prompt('Enter position number in the Fibonacci line. To calculate in Сycle');

function fibonacciСycle(a) {
    let first = 1;
    let second = 1;
    let next = 0;
    if (a === 1) {
        return "Under the number n :" + a + ", in the Fibonacci line is the number :" + first;
    } else if (a === 2) { 
        return "Under the number n :" + a + ", in the Fibonacci line is the number :" + second;
    } else {
    for (let i = 3; i <=a; i++) {
    let next = first + second;
    first = second;
    second = next;
    } 
    return "Under the number n :" + a + ", in the Fibonacci line is the number :" + second;}
    }

let resultСycle = fibonacciСycle(a);
alert(resultСycle);



const c = prompt('Enter position number in the Fibonacci line. To calculate in Recursion');

    function fibonacciRecursion(с) {
    if (c === 1) {
        return 1;
    } else if (c === 2) { 
        return 1;
    } else {
    return c <= 1 ? c : fibonacciRecursion(c - 1) + fibonacciRecursion(c - 2);
    }
    }

//let resultRecursion = fibonacciRecursion(с);
//alert(resultRecursion);