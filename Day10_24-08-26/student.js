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
    
        console.group("Create Student Debugger");
        console.log("Current Student Count", students.length);
        console.log("Student Data", studentObject);
        students.push(studentObject);
        console.log("After Creation- Student Count", students.length);
        console.table(students);
        console.groupEnd();
        localStorage.setItem("studentList", JSON.stringify(students));
        clearStudentForm();
        getAllStudents();
    }
}

 function clearStudentForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("department").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("status").value = "";
        
}
function getAllStudents() {
    const stundentList = localStorage.getItem("studentList") ? JSON.parse(localStorage.getItem("studentList")): [];
    document.getElementById("studentTable").innerHTML ="Available Students are" + stundentList.length;
}
    