const student = {
  ID: 1,
  FirstName: "Jane",
  LastName: "Smith",
  age: 22,
  Gender: "Female",
  Email: "janesmith@example.com",
  PhoneNumber: "987-654-3210",
  Address: "456 Elm Street",
  Major: "Psychology",
  YearOfStudy: "4",
  Status: "Pending",
  isDelete: false,
};

const student2 = {
  ID: 2,
  FirstName: "John",
  LastName: "Doe",
  age: 20,
  Gender: "Male",
  Email: "johndoe@example.com",
  PhoneNumber: "123-456-7890",
  Address: "123 Main Street",
  Major: "Computer Science",
  YearOfStudy: "2",
  Status: "Active",
  isDelete: false,
};


///********************************************* */
// Student array to store student objects
let students = [];

// Function to add a new student
function addStudent() {
  // Get data from inputs
  const id = document.getElementById('id').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const address = document.getElementById('address').value;
  const major = document.getElementById('major').value;
  const yearOfStudy = document.getElementById('yearOfStudy').value;
  if (!id || !firstName || !lastName || !age || !email ||!gender || !phoneNumber || !address || !major || !yearOfStudy) {
    alert('All fields are required.');
    return;
  }
  // Create a new student object
  const student = {
    id,
    firstName,
    lastName,
    age,
    gender,
    email,
    phoneNumber,
    address,
    major,
    yearOfStudy,
    status: 'pending',
    isDelete: false
  };

  // Add the student to the array
  students.push(student);

  // Reset input values
  document.getElementById('id').value = '';
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('age').value = '';
  document.getElementById('gender').value = 'male';
  document.getElementById('email').value = '';
  document.getElementById('phoneNumber').value = '';
  document.getElementById('address').value = '';
  document.getElementById('major').value = '';
  document.getElementById('yearOfStudy').value = '';

  // Update the student list
  updateStudentList();
}

// Function to update the student list in the table
function updateStudentList() {
  const studentList = document.getElementById('Student-list');
  studentList.innerHTML = '';

  students.forEach((student, index) => {
    if (!student.isDelete) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.firstName} ${student.lastName}</td>
        <td>
          <button onclick="setActive(${index})">${student.status === 'active' ? 'De-activate' : 'Activate'}</button>
          <button onclick="showStudentData(${index})">Show Data</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      `;
      studentList.appendChild(row);
    }
  });
}

// Function to set the status of a student as active or pending
function setActive(index) {
  const student = students[index];
  if (student.status === 'active') {
    student.status = 'pending';
  } else {
    student.status = 'active';
  }
  updateStudentList();
}

// Function to show the data of a student
function showStudentData(index) {
  const student = students[index];
  if (student.status === 'active' && !student.isDelete) {
    const stdData = document.getElementById('std-data');
    stdData.innerHTML = `
      <h2>Student Information</h2>
      <p><strong>ID:</strong> <span id="id">${student.id}</span></p>
      <p><strong>First Name:</strong> <span id="firstName">${student.firstName}</span></p>
      <p><strong>Last Name:</strong> <span id="lastName">${student.lastName}</span></p>
      <p><strong>Age:</strong> <span id="age">${student.age}</span></p>
      <p><strong>Gender:</strong> <span id="gender">${student.gender}</span></p>
      <p><strong>Email:</strong> <span id="email">${student.email}</span></p>
      <p><strong>Phone Number:</strong> <span id="phoneNumber">${student.phoneNumber}</span></p>
      <p><strong>Address:</strong> <span id="address">${student.address}</span></p>
      <p><strong>Major:</strong> <span id="major">${student.major}</span></p>
      <p><strong>Year of Study:</strong> <span id="yearOfStudy">${student.yearOfStudy}</span></p>
      <p><strong>Status:</strong> <span id="status">${student.status}</span></p>
      <p><strong>Is Deleted:</strong> <span id="isDelete">${student.isDelete}</span></p>
    `;
    stdData.classList.remove('display-none');
  } else {
    alert('The student is not active.');
  }
}

// Function to delete a student
function deleteStudent(index) {
  const student = students[index];
  if (student.status === 'active') {
    alert('The student must be de-activated before deleting.');
  } else {
    student.isDelete = true;
    updateStudentList();
    const stdData = document.getElementById('std-data');
    stdData.classList.add('display-none');
  }
}
//Function to filter students by age or major 
const filterData=()=>{

  const age=document.getElementById("filter-age").value;
  const major=document.getElementById("filter-major").value;
  console.log('age :>> ', age);
  console.log('major :>> ', major);
  console.log('students :>> ', students);
  const newStudent=students.map((std)=>{
    console.log('std :>> ', std);
  if(age && major){
    if(std.age=== parseInt(age) &&std.Major=== major){
      return std;
    }
  }
  if(age){
    if(std.age=== parseInt(age)){
      console.log('agewhat :>> ', age);
      return std;
    }}
  if(major){
    if(std.major=== major){
      console.log('majorfjaj :>> ', major);
      return std;
    }
  }


  });
  updateStudentList();
};



