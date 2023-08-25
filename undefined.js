/*
8 ways to get undefine

    1.  variable declared but value not assigned.
    2. function with no return.
    3. function parameter if not passed the show undefined.
    4. if return has nothing on the right side will return undefined.
    5. property that doesn't exist on an array will give undefined.
    6. accessing array elements outside of the index range.
    7. deleting an element inside an array
    8. set a value directly to undefined

*/

// case 1:
let first;
// console.log(first);

// case 2:
function second(a, b) {
    const total = a + b;
}
const result = second();
// console.log(result);

// case 3
function third(a, b, c, d) {
    const total = (a + b + c + d);
    // console.log(a, b, c, d);
}
third(2, 4)

// case 4
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return // ki return korbe ta define na korle undefined hobe.
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

// case 5
const myInfo = { name: 'Hasan', job: 'Web Developer' }
// console.log(myInfo.age);

// case 6
const sixth = [4, 89, 87, 56, 32];
// console.log(sixth[1], sixth[20]);


const eighth = undefined;

const ninth = null;

const data = { results: [], updated: null }

// console.log(typeof undefined);
console.log(typeof null);