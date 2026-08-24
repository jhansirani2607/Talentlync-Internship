
# CRUD OPERATIONS

- 1 store the  form data into the local storage.
- 2 validations on from data.
- 3 reset the from data.
- 4 getting students count even after refreshing the page.

* LocalStorage is used to store student data in the browser.
* createStudent() → Gets form values, validates them, creates a student object, and stores it.
* checkUsersCount() → Displays the total number of students.
* clearStudentForm() → Clears all form fields.
* getAllStudents() → Gets student data from LocalStorage and displays the count.
* students.push(studentObject) → Adds a new student to the array.
* JSON.stringify() → Converts the array into a string before storing.
* JSON.parse() → Converts the stored string back into an array.
* Date.now() → Generates a unique ID for each student.