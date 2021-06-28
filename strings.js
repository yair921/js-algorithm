export function firstletter(arr) {
    if (!arr) {
        arr = [
            'hello',
            'car',
            'available',
            'node'
        ];
    }
    let result = [];
    let arraWord;
    let arraWordSecond;
    for (let i = 1; i < arr.length; i++) {
        arraWord = arr[i - 1].split('');
        arraWordSecond = arr[i].split('');
        result.push(arraWord.shift(), arraWordSecond.pop())
    }
    console.log(result);
    return result;
}
