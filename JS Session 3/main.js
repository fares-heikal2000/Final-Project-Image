let da = new Date();

// console.log(da.getFullYear())
// console.log(da.getMonth())
// console.log(da.getDate())
// console.log(da.getDay())



let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function getDayName() {
   console.log(weekDay[da.getDay()]);
}
getDayName();