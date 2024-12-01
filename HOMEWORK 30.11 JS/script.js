// task 1
let massive = [10 ,20, 30, 40, 50, 60, 70, 80, 90, 100 ];
const massiveFilter =   massive.filter((num) => num >= 50)
const massiveFilterResult = massiveFilter.map((num) => num * 2)
// console.log(`Sandar:  ${massive} \n \n Filter:  ${massiveFilter} => \n \n`);
console.log("1 task result :  "+massiveFilterResult);
// task 2
massive = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let NewMassive = [100, 200, 300];
NewMassive.forEach(newnum => {
    massive.push(newnum); 
});
let sum = 0;
massive.forEach(element => {
    sum += element; 
});
console.log("2 task result : " + sum);
// task 3
massive = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let MassiveMap = massive.map((num) => num * 3)
// console.log(MassiveMap);
let MassiveMapFilter = MassiveMap.filter((num)=> num <= 100)
console.log('3 task result : ' + MassiveMapFilter);

