// task 1
let People=[]
let index = [1,2,3]
for (let i of index) {
    let name = prompt("Enter name")
    let age = prompt("Enter age")
    let Person = {
        name: name ,
        age: age

    }
    People.push(Person)
}

for (let Person of People){
    alert( Person.name + Person.age )
}

// task2

let Library = [
  { title: "Harry Poter", author: "", year: 2024 },
  { title: "Fragile", author: "", year: 2017 },
  { title: "The Thief", author: "", year: 2005 },
];

alert(
  `Title : "Harry Poter" Year: 2024 \nTitle: Fragile Year: 2017 \nTitle: The Thief Year: 2005`
);

function NewBookYear(bookName) {
  let foundBook = Library.find((book) => book.title === bookName);

  if (foundBook) {
    let newYear = prompt(`Enter the new year for "${bookName}" book:`);
    foundBook.year = newYear;
  } else {
    alert(`${bookName} book is not found!`);
  }
}

let BookName = prompt("Enter name book");
NewBookYear(BookName);

let booksNew = Library.map((book) => `name: ${book.title} author: ${book.author} year: ${book.year}`).join("\n");
alert(booksNew);

// task 3

let students = [
  { name: "Aisha", age: 15, grade: 10 },
  { name: "Sara", age: 14, grade: 9 },
  { name: "Bakut", age: 12, grade: 7 },
  { name: "Erik", age: 11, grade: 6 },
  { name: "Dina", age: 16, grade: 11 },
];

function StudentSort(){
    return students.sort((a , b) => a.age - b.age )
}
function BigAge(){
    return students.sort((a, b) => b.age - a.age)[0];
}
function SmallAge(){
    return students.sort((a, b) => a.age - b.age)[0];
}
console.log(StudentSort())
console.log(BigAge());
console.log(SmallAge());


