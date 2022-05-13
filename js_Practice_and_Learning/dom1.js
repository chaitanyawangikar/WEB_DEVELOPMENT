console.log(document.body);
console.log(document.head);
console.log(document.body.children);
// console.log(document.body.parentElement);
// console.log(document.body.accessKey);
const arr = Array.from(document.body.children);
console.log(arr);

// const arr1 = [document.body.children];
// console.log(arr1);

for (let x of arr) {
    console.log(x);
}

console.log(document.body.childNodes);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);