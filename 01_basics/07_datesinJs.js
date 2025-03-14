// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,23)//month zero se start hote hain
// let myCreatedDate= new Date(2025,1,23,5,3,50)//year,month,date,hour,minute,second
// let myCreatedDate = new Date("2023-01-13")
let myCreatedDate = new Date("01-02-2008")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

console.log(`Today is the day : ${newDate.getDay()} and the time is ${myCreatedDate.getTime()}`)

newDate.toLocaleString('default',{
    weekday : "long",
})
