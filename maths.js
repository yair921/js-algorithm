export function getDivisores(n, k) {
    let count = 0;
    //get divisor
    let diviors = getDivisoresArr(n, k);
    diviors.forEach(divisor => {
        if ((n % divisor) === 0)
            count++;
    });
    console.log(count);
    return count;
}

function getDivisoresArr(n, k) {
    let nStr = n.toString();
    let result = []
    let length = nStr.length;
    let divisor = null;
    for (let i = 0; i < length; i++) {
        divisor = parseInt(nStr.substring(i, k));
        if (!result.includes(divisor))
            result.push(divisor);
        k++
    }
    console.log(result);
    return result;
}
