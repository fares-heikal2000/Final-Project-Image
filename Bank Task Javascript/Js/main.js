let usersList = [];


function addUser(id , balance, name) {
    usersList.push(
        {
            id : id,
            balance : balance,
            name : name
        }
    );
    show();
};


let form = document.getElementById("myFrom");
let id = document.getElementById("id-id");
let name = document.getElementById("name-id");
let salary = document.getElementById("salary-id");

form.addEventListener("submit" , function (e) {
    e.preventDefault()
    addUser(e.target[0].value, e.target[2].value, e.target[1].value)

})

let t_body = document.getElementById("t_body");
function show () {
    t_body.innerHTML= ""
    usersList.forEach((item, i , arr) => {
        let tr = document.createElement("tr");
        let td_id = document.createElement("td");
        td_id.innerText = item.id; 
        let td_name = document.createElement("td");
        td_name.innerText = item.name; 
        let td_balance = document.createElement("td");
        td_balance.innerText = item.balance; 
        let td_btns = document.createElement("td");
        let update = document.createElement("button");
        update.innerText = "Update";
        update.classList.add ("bg-info", "mx-2", "rounded-pill", "px-2", "py-1")
        let romve = document.createElement("button");
        romve.innerText = "Rmove"; 
        romve.classList.add ("bg-danger", "mx-2", "rounded-pill", "px-2", "py-1")
        td_btns.appendChild(update);
        td_btns.appendChild(romve);
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_balance);
        tr.appendChild( td_btns);
        t_body.appendChild(tr)

        // update
        update.addEventListener("click", function(){
            let newBalance = prompt("Enter Your New balance");
            usersList[i].balance = newBalance;
            td_balance.innerText = newBalance;
        })

        // romve
        romve.addEventListener("click", function() {
            usersList.splice(i, 1);
            show()
        })

    }) 

}

// function update() {

//     let updateId = prompt("Id to Update");
//     let newValue = prompt("New Value Of Balance")
//     let index =   usersList.findIndex(item => item.id == updateId);
//     usersList[index].balamce = newValue;
// };
// update();
















































// function del () {
//     // let delId = prompt("Id to Delete");
//     let indexDel =  usersList.findIndex(item => item.id == delId);
//     usersList.splice(indexDel ,1);
// }
// del()

// console.table(usersList);