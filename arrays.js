/**
 * Returns unique values
 * { '26': 3, '27': 1, '28': 2, '29': 2, '30': 1 }
 */
 export function countItems() {
    const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
    const result = {};
    ages.forEach(item => {
        if (result[item]) {
            result[item] = result[item] + 1;
        } else {
            result[item] = 1;
        }
    });
    console.log(result);
}

/**
 * Item array counter string
 * 26=>3:27=>1:28=>2:29=>2:30=>1
 */
 export function countItemsString() {
    const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
    const order = (a, b) => {
        return a - b;
    }
    let arrOrder = ages.sort(order);
    const result = [];
    let indexToAdd = 1;
    arrOrder.forEach((item, index) => {
        if (index === 0) {
            result.push(item + '=>');
            result.push(1);
        } else if (item === ages[index - 1]) {
            result[indexToAdd] = result[indexToAdd] + 1;
        } else {
            result.push(':' + item + '=>');
            result.push(1);
            indexToAdd += 2;
        }
    });
    console.log(result.join(''));
}

/**
 * Returns unique values
 * [ 26, 27, 28, 29, 30 ]
 */
 export function distinct() {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
    const uniqueAges = ages.filter(unique);
    console.log(uniqueAges);
}

/**
 * Returns ordered array
 * [ 1,  1,  2,  2, 10, 10, 20, 30, 50 ]
 */
export function order(array, areNumbers = true) {
    if (array.length === 0) {
        array = [1, 2, 10, 20, 30, 1, 2, 50, 10];
    }
    const order = (a, b) => {
        return a - b;
    }
    let result;
    if (areNumbers) {
        result = array.sort(order);
    } else {
        result = array.sort();
    }
    console.log(result);
    return result;
}


/**
 * Get max value.
 * 30
 */
 export function getMax() {
    const ages = [30, 26, 27, 26, 26, 28, 28, 29, 29, 30];
    let result = Math.max(...ages);
    console.log(result);
    return result;
}