// dynamic type Language

// primitive type
const a = 5;
const b = "samsu kopai na akhon ar";
const d = true;


// non-primitive
const ages = [45, 65, 48];
const student = { id: 23, class: 7 }
// console.log(typeof a, typeof b, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7; // value is reassigned
console.log(x, y);

let p = { job: 'web developer' }
let q = p;
q.job = 'front end developer'
console.log(p, q);
