let butnOne = document.querySelector('.astagpher-btn')
let counter = 1;
function increseElement() {
    butnOne.innerHTML = counter++;
}
butnOne.onclick = increseElement;
/////////////////////////////
let butntwo = document.querySelector('.alhamdo-btn')
let counterTwo = 1;
function increseElementTwo() {
    butntwo.innerHTML = counterTwo++;
}
butntwo.onclick = increseElementTwo;
//////////////////////////////
let butnthree = document.querySelector('.reset-btn')
let counterthree = 0;
function resetElement() {
    counter = 0;
    counterTwo = 0;
    butnOne.innerHTML = counter;
    butntwo.innerHTML = counterTwo;
}
butnthree.onclick = resetElement;


a = 2;
while (a < 5) {
    print(a);
    a = a + 1;
};

console.log(parseInt("123hello"));
console.log(parseInt("Hello123"));


const name = "john";
const user = { name: "user1", age: 15 }
console.log(user[name])

console.log(NaN === NaN)


// const obj1 = {
//     property1: 2
// };
// obj1.property1 = 4;
// console.log(obj1.property1, obj1.name);