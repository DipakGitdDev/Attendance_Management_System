function dashboardPage() {
    window.location.href = "dashboard.html";
}

function studentPage() {
    window.location.href = "students.html";
}

function teacherPage() {
    window.location.href = "teachers.html";
}

function attendancePage() {
    window.location.href = "attendance.html";
}

function reportPage() {
    window.location.href = "reports.html";
}

function settingPage() {
    window.location.href = "settings.html";
}

function logoutPage() {
    if (confirm("Do you want to logout?")) {
        window.location.href = "login.html";
    }
}
// =============================
// Student Popup
// =============================

function openForm(){

    document.getElementById("studentPopup").style.display="flex";

}

function closeForm(){

    document.getElementById("studentPopup").style.display="none";

}

    
let studentId = 2;

let currentRow = null;
let editMode = false;

function saveStudent(){

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let course = document.getElementById("studentCourse").value;

    if(name=="" || email=="" || course==""){

        alert("Please fill all required fields.");
        return;

    }

    if(editMode){

        currentRow.cells[1].innerText = name;
        currentRow.cells[2].innerText = email;
        currentRow.cells[3].innerText = course;

        editMode = false;
        currentRow = null;

        document.getElementById("saveButton").innerText = "Save";

    }else{

        let table = document.getElementById("studentTable");

        table.innerHTML += `
        <tr>

            <td>${studentId}</td>

            <td>${name}</td>

            <td>${email}</td>

            <td>${course}</td>

            <td>

                <button class="edit-btn"
                onclick="editStudent(this)">
                Edit
                </button>

                <button class="delete-btn"
                onclick="deleteStudent(this)">
                Delete
                </button>

            </td>

        </tr>
        `;

        studentId++;

    }

    document.getElementById("studentName").value="";
    document.getElementById("studentEmail").value="";
    document.getElementById("studentCourse").value="";
    document.getElementById("studentRoll").value="";
    document.getElementById("studentPhone").value="";

    closeForm();

}
function deleteStudent(button){

    let confirmDelete =
    confirm("Are you sure you want to delete this student?");

    if(confirmDelete){

        let row = button.parentElement.parentElement;

        row.remove();

    }


}
function editStudent(button){

    currentRow = button.parentElement.parentElement;

    document.getElementById("studentName").value =
        currentRow.cells[1].innerText;

    document.getElementById("studentEmail").value =
        currentRow.cells[2].innerText;

    document.getElementById("studentCourse").value =
        currentRow.cells[3].innerText;

    document.getElementById("saveButton").innerText = "Update";

    editMode = true;

    openForm();

}

// ============================
// Search Student
// ============================

function searchStudent(){

    let input = document.getElementById("searchStudent").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(function(row){

        let name = row.cells[1].innerText.toLowerCase();

        let email = row.cells[2].innerText.toLowerCase();

        let course = row.cells[3].innerText.toLowerCase();

        if(

            name.includes(input) ||

            email.includes(input) ||

            course.includes(input)

        ){

            row.style.display="";

        }

        else{

            row.style.display="none";

        }

    });

}

// ====================================
// Teacher CRUD
// ====================================

let teacherId = 3;

let currentTeacherRow = null;

let teacherEditMode = false;

// Open Popup

function openTeacherForm(){

    document.getElementById("teacherPopup").style.display="flex";

}

// Close Popup

function closeTeacherForm(){

    document.getElementById("teacherPopup").style.display="none";

}

// Save Teacher

function saveTeacher(){

    let name=document.getElementById("teacherName").value;

    let email=document.getElementById("teacherEmail").value;

    let subject=document.getElementById("teacherSubject").value;

    if(name=="" || email=="" || subject==""){

        alert("Please fill all fields.");

        return;

    }

    let table=document.getElementById("teacherTable");

    if(teacherEditMode){

        currentTeacherRow.cells[1].innerText=name;

        currentTeacherRow.cells[2].innerText=email;

        currentTeacherRow.cells[3].innerText=subject;

        teacherEditMode=false;

        currentTeacherRow=null;

    }

    else{

        table.innerHTML+=`

        <tr>

        <td>${teacherId}</td>

        <td>${name}</td>

        <td>${email}</td>

        <td>${subject}</td>

        <td>

        <button class="edit-btn"

        onclick="editTeacher(this)">

        Edit

        </button>

        <button class="delete-btn"

        onclick="deleteTeacher(this)">

        Delete

        </button>

        </td>

        </tr>

        `;

        teacherId++;

    }

    document.getElementById("teacherName").value="";

    document.getElementById("teacherEmail").value="";

    document.getElementById("teacherSubject").value="";

    document.getElementById("teacherPhone").value="";

    closeTeacherForm();

}

// Delete Teacher

function deleteTeacher(button){

    if(confirm("Delete this teacher?")){

        button.parentElement.parentElement.remove();

    }

}

// Edit Teacher

function editTeacher(button){

    currentTeacherRow=button.parentElement.parentElement;

    document.getElementById("teacherName").value=currentTeacherRow.cells[1].innerText;

    document.getElementById("teacherEmail").value=currentTeacherRow.cells[2].innerText;

    document.getElementById("teacherSubject").value=currentTeacherRow.cells[3].innerText;

    teacherEditMode=true;

    openTeacherForm();

}

// ================================
// Attendance
// ================================

function saveAttendance(){

    alert("Attendance Saved Successfully!");

}

// =============================
// Attendance Summary
// =============================

function markAllPresent(){

    let status=document.querySelectorAll(".attendanceStatus");

    status.forEach(function(item){

        item.value="Present";

    });

    updateAttendanceSummary();

}

function markAllAbsent(){

    let status=document.querySelectorAll(".attendanceStatus");

    status.forEach(function(item){

        item.value="Absent";

    });

    updateAttendanceSummary();

}

function updateAttendanceSummary(){

    let status=document.querySelectorAll(".attendanceStatus");

    let present=0;

    let absent=0;

    status.forEach(function(item){

        if(item.value=="Present"){

            present++;

        }else{

            absent++;

        }

    });

    let total=present+absent;

    let percentage=total==0 ? 0 : ((present/total)*100).toFixed(0);

    let presentCount = document.getElementById("presentCount");
let absentCount = document.getElementById("absentCount");
let attendancePercentage = document.getElementById("attendancePercentage");

if(presentCount && absentCount && attendancePercentage){

    presentCount.innerText = present;
    absentCount.innerText = absent;
    attendancePercentage.innerText = percentage + "%";

}
}

// Update summary when dropdown changes

// Run only if Attendance page is open

if(document.querySelector(".attendanceStatus")){

    document.querySelectorAll(".attendanceStatus").forEach(function(item){

        item.addEventListener("change", updateAttendanceSummary);

    });

    updateAttendanceSummary();

}

// ===============================
// Reports
// ===============================

function generateReport(){

    let from=document.getElementById("fromDate").value;

    let to=document.getElementById("toDate").value;

    if(from=="" || to==""){

        alert("Please select both dates.");

        return;

    }

    alert("Report Generated Successfully!");

}

// ==========================
// Settings
// ==========================

function saveSettings(){

    alert("Settings Saved Successfully!");

}