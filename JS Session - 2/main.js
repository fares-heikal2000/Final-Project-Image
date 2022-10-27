


// let month = prompt("Enter Your Month")
// switch (month) {
//     case "1" :
//         console.log("January")
//     break;
//     case "2" :
//         console.log("February")
//     break;
//     case "3" :
//         console.log("March")
//     break;
//     case "4" :
//         console.log("April")
//     break;
//     case "5" :
//         console.log("May")
//     break;
//     case "6" :
//         console.log("June")
//     break;
//     case "7" :
//         console.log("July")
//     break;
//     case "8" :
//         console.log("August")
//     break;
//     case "9" :
//         console.log("September")
//     break;
//     case "10" :
//         console.log("October")
//     break;
//     case "11" :
//         console.log("November")
//     break;
//     case "12" :
//         console.log("December")
//     break;
//     default : 
//     console.log("Inter A Valid Number Of Your Month")
// }

function X(startNum, endNum, continueNum, breakNum) {
    if (startNum != undefined & endNum != undefined & continueNum != undefined & breakNum != undefined) {
        for(i = startNum; i <= endNum; i++) {
            if (continueNum == i) {
                continue;
            }
            if (breakNum == i) {
                break;
            }
            console.log(i)
        }
    }
    else {
        console.log ("Enter All Numbers")
    }
}

X(1,20,6,15);

