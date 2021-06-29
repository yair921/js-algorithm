import { countItems, countItemsString, distinct, order } from './arrays.js';
import { fibonacciSequence } from './algorithms.js';
import { get } from './api.js';

//order([]);
//countItems();
//countItemsString();
//distinct();
//fibonacciSequence(10);
(async () => console.log(await get('https://encrypted.google.com/')))();