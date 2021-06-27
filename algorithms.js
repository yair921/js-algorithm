/**
 * Fibonacci algorithm
 */
 export function fibonacciSequence(lastNumber) {
    let result = [];
    let number = 0;
    while (number <= lastNumber) {
        if (result.length === 0) {
            result.push(0);
        } else if (result.length === 1 || result.length === 2) {
            result.push(1);
        } else {
            number = result[result.length - 1] + result[result.length - 2]
            result.push(number);
        }
    }
    console.log(result);
}