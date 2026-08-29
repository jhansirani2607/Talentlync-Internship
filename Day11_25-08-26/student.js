let students=localStorage.getItem("studentList")?JSON.parse(localStorage.getItem("studentList")):[];

function checkUsersCount() {
    document.getElementById('res').innerHTML = "Total users: " + students.length;
}

function createStudent()
{
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const department=document.getElementById("department").value;
    const marks=document.getElementById("marks").value;
    const status=document.getElementById("status").value;


    let validation = true;
    if (name == "") {
        alert("Please enter name");
        validation = false;
    }
    if (age == "") {
        alert("Please enter age");
        validation = false;
    }

    if (validation) {
        const studentObject = {
        id: Date.now(),
        name: name,
        age: Number(age),
        department: department,
        marks: Number(marks),
        status: status,
        };
    
        students.push(studentObject);
        localStorage.setItem("studentList", JSON.stringify(students));
        clearStudentForm();
        
    }
}

 function clearStudentForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("department").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("status").value = "";
        
}

// today is rendering concept
// display the form data in website using rendering concept
function loadStudents(){
    const stundentList = localStorage.getItem("studentList") 
    ? JSON.parse(localStorage.getItem("studentList")): [];
    return stundentList;
}
function getAllStudents() {
    const students=loadStudents();
    const tableBody=document.getElementById("studentTableBody");
    tableBody.innerHTML="";

    students.forEach(student => {
        const row=`
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.marks}</td>
            <td>${student.status}</td>
            <td>Edit || Delete</td>
        </tr>`;
        tableBody.innerHTML +=row;
    });

}
    