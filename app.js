const addData = document.querySelector("#Submit");
const StudentForm = document.querySelector("#StudentForm");
studentTable = document.getElementById("studentTable");
// console.log(StudentForm);
document.addEventListener("DOMContantLoaded", getStudents());

function saveStudentData(student) {
  //check -- hey do i already have thing in there?
  let students;
  if (localStorage.getItem("students") === null) {
    students = [];
  } else {
    students = JSON.parse(localStorage.getItem("students"));
  }

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}

function getStudents() {
  studentTable.innerHTML = "";
  //check -- hey do i already have thing in there?
  let students;
  if (localStorage.getItem("students") === null) {
    students = [];
  } else {
    students = JSON.parse(localStorage.getItem("students"));
  }

  students.forEach((student, index) => {
    // TR Created
    const Tr = document.createElement("tr");

    // Hash TD Created
    const Hash = document.createElement("td");
    Hash.innerText = index;
    // Name Created
    const name = document.createElement("td");
    name.innerText = student.name;
    // Email Created
    const email = document.createElement("td");
    email.innerText = student.email;
    // Class Created
    const studentclass = document.createElement("td");
    studentclass.innerText = student.class;
    // A Created
    const a = document.createElement("td");
    a.innerText = student.a;
    // B Created
    const b = document.createElement("td");
    b.innerText = student.b;
    // B Created
    const c = document.createElement("td");
    c.innerText = student.c;
    // C Created
    const d = document.createElement("td");
    d.innerText = student.d;
    // ObtainedMark Created
    const obtainedMark = document.createElement("td");
    obtainedMark.innerText = student.obtainedMark;
    // Percentage Created
    const percentage = document.createElement("td");
    percentage.innerText = student.percentage + "%";
    // Result Created
    const result = document.createElement("td");
    result.innerText = student.result;

    Tr.appendChild(Hash);
    Tr.appendChild(name);
    Tr.appendChild(email);
    Tr.appendChild(studentclass);
    Tr.appendChild(a);
    Tr.appendChild(b);
    Tr.appendChild(c);
    Tr.appendChild(d);
    Tr.appendChild(obtainedMark);
    Tr.appendChild(percentage);
    Tr.appendChild(result);

    studentTable.appendChild(Tr);
  });
}

// Add event listener
StudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formElement = document.forms.StudentForm;
  let formData = new FormData(formElement);

  //   Getting form data from StudentForm
  let name = formData.get("name");
  let email = formData.get("email");
  let studentClass = formData.get("class");
  let a = +formData.get("a");
  let b = +formData.get("b");
  let c = +formData.get("c");
  let d = +formData.get("d");

  //   Calculating form variable values
  let obtainedMark = a + b + c + d;
  let percentage = (obtainedMark / 400) * 100;
  let result = obtainedMark >= 250 ? "Pass" : "Fail";

  //   Edit and Delete function
  //   let edit = formData
  //   A Function to Check result
  //   const calcResult = (mark) => {
  //     if (mark >= 250) {
  //       return "Pass";
  //     } else {
  //       return "Fail";
  //     }
  //   };

  //   250 and above will pass and below will fail.
  //   let result = calcResult(obtainedMark);

  //   console.log(
  //     name,
  //     email,
  //     studentClass,
  //     a,
  //     b,
  //     c,
  //     d,
  //     obtainedMark,
  //     percentage,
  //     result
  //   );
  let student = {
    name: name,
    email: email,
    class: studentClass,
    a: a,
    b: b,
    c: c,
    d: d,
    obtainedMark: obtainedMark,
    percentage: percentage.toPrecision(4),
    result: result,
    // edit: edit,
    // delete: "delete",
  };

  saveStudentData(student);
  StudentForm.reset();
  getStudents();
});

// getStudents();

// let formElement = document.forms.Submit;
// let formData = new FormData(formElement);
// let name = formData.get("name");
// console.log(name);

// let students = [];
// students.push({
//   name: "Ranjit",
//   email: "ranjitkoiri009@gmail.com",
//   class: "12th",
// });
// console.log(students);
// localStorage.setItem("students", JSON.stringify(students));
