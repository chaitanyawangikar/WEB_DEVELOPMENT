// var arr = ["abc", 8, "xyz", true];
// console.log(arr);

/* var arr = [['1' + " " + 2 + ' 3'],
['4' + " " + 5 + ' 6'],
['7' + " " + 8 + ' 9']];
for (var i = 0; i < 3; i++) {
    for (let element in arr) {
        console.log(arr[element].toString());
    }
    break;
} */

/* var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < 3; i++) {
    for (let element in arr) {
        console.log(arr[element].toString());
    }
    break;
}
 */



/* var i;
i = window.prompt('Enter your dataset number from 0 to 11:');
var arr0 = [0, 'abc', 1502];
var arr1 = [1, 'abc', 1502];
var arr2 = [2, 'abc', 1502];
var arr3 = [3, 'abc', 1502];
var arr4 = [4, 'abc', 1502];
var arr5 = [5, 'abc', 1502];
var arr6 = [6, 'abc', 1502];
var arr7 = [7, 'abc', 1502];
var arr8 = [8, 'abc', 1502];
var arr9 = [9, 'abc', 1502];
var arr10 = [10, 'abc', 1502];
var arr11 = [11, 'abc', 1502];
//i = window.prompt('Enter your value you need to print info of from 0 to 10: ');
console.log(i);
if (i >= 0 && i <= 11) {
    switch (i) {
        case 0: console.log(arr0);
            break;
        case 1: console.log(arr1);
            break;
        case 2: console.log(arr2);
            break;
        case 3: console.log(arr3);
            break;
        case 4: console.log(arr4);
            break;
        case 5: console.log(arr5);
            break;
        case 6: console.log(arr6);
            break;
        case 7: console.log(arr7);
            break;
        case 8: console.log(arr8);
            break;
        case 9: console.log(arr9);
            break;
        case 10: console.log(arr10);
            break;
        case 11: console.log(arr11);
            break;
        default: console.log('You have entered wrong dataset number');
            break;
    }
} */
/* else {
    console.log('You have entered wrong dataset number');
} */


/* var i;
// debugger;
i = window.prompt('Enter your dataset number from 0 to 11:');
i = Number(i);
var arr0 = [0, 'abc', 1502];
var arr1 = [1, 'abc', 1502];
var arr2 = [2, 'abc', 1502];
var arr3 = [3, 'abc', 1502];
var arr4 = [4, 'abc', 1502];
var arr5 = [5, 'abc', 1502];
var arr6 = [6, 'abc', 1502];
var arr7 = [7, 'abc', 1502];
var arr8 = [8, 'abc', 1502];
var arr9 = [9, 'abc', 1502];
var arr10 = [10, 'abc', 1502];
var arr11 = [11, 'abc', 1502];
console.log(i);
if (i >= 0 && i <= 11) {
    switch (i) {
        case 0: console.log(arr0);
            break;
        case 1: console.log(arr1);
            break;
        case 2: console.log(arr2);
            break;
        case 3: console.log(arr3);
            break;
        case 4: console.log(arr4);
            break;
        case 5: console.log(arr5);
            break;
        case 6: console.log(arr6);
            break;
        case 7: console.log(arr7);
            break;
        case 8: console.log(arr8);
            break;
        case 9: console.log(arr9);
            break;
        case 10: console.log(arr10);
            break;
        case 11: console.log(arr11);
            break;
        default: console.log('You have entered wrong dataset number');
            break;
    }
} */


// How to take multiple dummy values directly for testing


const arr = [10, 20, 30, 40, 50];
let arr2 = arr.reduce((accumulator, element) => (accumulator + element));
console.log(arr2);

