// let myDate = Date();
// console.log(typeof myDate);
// console.log(myDate.toString());

// console.log(myDate.toLocaleString());
// let myCreatedDate = new Date("01-11-2023")
// console.log(myCreatedDate.toLocaleString());



let newDate = Date.now()
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default', {
    weekday: "long",
    
})