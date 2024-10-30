const std_name = document.querySelector("#name");
const std_id = document.querySelector("#id");
const std_email = document.querySelector("#email");
const std_number = document.querySelector("#number");
const container2 = document.querySelector("#container2");

const studentlist = document.querySelector(".student-list");
const tbody = document.querySelector("tbody");
const addbtn = document.getElementById("add-btn");
addbtn.addEventListener("click",addstudent);
function addstudent(){ 
    if(std_name.value == "" || std_id.value == "" || std_email.value == "" || std_number.value == ""){
        alert("Please fill the detail ");
    }

    else {
        // Inserting student data into table
    const row = document.createElement("tr");
    const column1 = document.createElement("td");
    column1.innerHTML=std_name.value;
    row.appendChild(column1);
    localStorage.setItem("name",std_name.value);
    column1.innerHTML = localStorage.getItem("name");

    const column2 = document.createElement("td");
    row.appendChild(column2);
    localStorage.setItem("id",std_id.value);
    column2.innerHTML = localStorage.getItem("id");


    const column3 = document.createElement("td");
    row.appendChild(column3);
    localStorage.setItem("email",std_email.value);
    column3.innerHTML = localStorage.getItem("email");

    const column4 = document.createElement("td");
    row.appendChild(column4);
    localStorage.setItem("mobile",std_number.value);
    column4.innerHTML = localStorage.getItem("mobile");

// Creating edit button
    const editbutton = document.createElement("button");
    editbutton.innerHTML="Edit";
    editbutton.classList.add("bttns")
    editbutton.addEventListener("click", editelement);

// edit button functionality
    function editelement(button)
     {

        let nameCell = column1;
        let idCell = column2;
        let emailCell = column3;
        let numberCell = column4;

        let nameInput =
            prompt("Enter the updated name:",
                nameCell.innerHTML);
        let idInput =
            prompt("Enter the updated id:",
                idCell.innerHTML);
        let emailInput =
            prompt("Enter the updated email:",
                emailCell.innerHTML
            );
        let numberInput =
            prompt("Enter the updated contact number:",
                numberCell.innerHTML
            );

        nameCell.innerHTML = nameInput;
        idCell.innerHTML = idInput;
        emailCell.innerHTML = emailInput;
        numberCell.innerHTML = numberInput;
    }
//  Creating Delete Button
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML="Delete";
    deletebutton.classList.add("bttns")
    deletebutton.addEventListener("click",deleteitem);
    
    // Delete Button Functionality
    function deleteitem(){
        const isTrue = confirm("Are you sure you want to delete this student !");
        if(isTrue){
            row.remove();
        }       
    }

    const column5 = document.createElement("td");
    column5.appendChild(editbutton);
    column5.appendChild(deletebutton);
    row.appendChild(column5);

    alert("Student Registered Successfully")
    tbody.appendChild(row);
    }
 
    }

