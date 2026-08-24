let students=[
    {
        id:1,
        name:"jhansi",
        repos:2,
        branch:"cse",
        marks:85,
        status:'in-active',
    },
    {
        id:2,
        name:"subha",
        repos:2,
        branch:"cse",
        marks:76,
        status:'in-active',
    },
    {
        id:3,
        name:"vandana",
        repos:3,
        branch:"csm",
        marks:79,
        status:'active',
    },
    {
        id:4,
        name:"swapna",
        repos:1,
        branch:"cse",
        marks:68,
        status:'in-active',
    },
    
]
function checkuserscount()
{
    document.getElementById('res').innerHTML = "Total users: " + students.length;
    console.table(student);
}