// task 1
let obj = { a: 1, b: 2, c: 3, d: 4 };
let sum = 0;
for (let i in obj) {
  sum += obj[i];
}
console.log(sum);
// task 2

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// task 3
const students = [
  { id: 1, name: "A" },
  { id: 2, name: "A" },
  { id: 3, name: "A" },
  { id: 4, name: "A" },
  { id: 5, name: "A" },
];

let even = students.filter((num) => num.id % 2 === 0);
let odd = students.filter((num) => num.id % 2 !== 0);

console.log("Even :", even);
console.log("Odd :", odd);

// task 4

const library = {
    name: "Alatay HUB",
    books: [
        { name: 'Book A' , pages: 300},
        { name: 'Book B' , pages: 100},
        { name: 'Book C' , pages: 340},
        { name: 'Book D' , pages: 1000},
    ]
}
function PageFind() {
    return library.books.reduce((total , sum) => total + sum.pages , 0) / library.books.length
}
function MinPage(){
    return library.books.sort((a ,b)=> a.pages - b.pages)[0]
}
function MaxPage(){
    return library.books.sort((a, b) => a.pages - b.pages)[3];
}
console.log(PageFind());
console.log('Min page : ',MinPage());
console.log('Max page : ',MaxPage());



