import ModulesControls from "./ModulesControls";
import SearchButton from "./Search";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import "./index.css"
import { FiFilter } from "react-icons/fi";
import * as db from "../../Database/";

export default function Grades() {

  const { pathname } = useLocation();

  const pathStrSplit = pathname.split('/')
  const course_id = pathStrSplit[3]
  // const assignment_id = pathStrSplit[5]
  const grades = db.grades;
  const enrollments = db.enrollments;
  const users = db.users;
  console.log(grades)


  let container = document.getElementById("container");

  // Create the table element
  let table = document.createElement("table");

  const students = db.enrollments.filter((a) => a.course == course_id);




  console.log("here", students)
  function createRow(student_id: string) {

    var row = []
    var col_names = ["Student Name"]
    for (let j = 0; j < students.length; j++) {

      const username = users.filter((a) => a._id == students[j].user)
      const select_grades = grades.filter((a) => a.student == students[j].user)
      console.log("select_grades", select_grades)
      console.log("username", username[0].firstName, username[0].lastName)
      row.push(username[0].firstName + " " + username[0].lastName)

      for (let i = 0; i < select_grades.length; i++) {
        row.push(select_grades[i].grade)
        col_names.push(select_grades[i].assignment)
      }

    }
    let unique = [...new Set(col_names)];
    var newCols = unique.length
    var newRows = row.length / newCols
    const newArr = [];
    while (row.length) newArr.push(row.splice(0, newCols));

    console.log("new arr", newArr);
    return ([newArr, unique])
  }
  const row = createRow("126")[0]
  const col_names = createRow("126")[1]



  console.log("res", col_names)
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  col_names.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item; // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
  });
  thead.appendChild(tr); // Append the header row to the header
  table.append(tr) // Append the header to the table


  console.log(thead)
  // console.log("col_names", col_names)


  // function makeTable(array) {
  //   var table = document.createElement('table');
  //   for (var i = 0; i < array.length; i++) {
  //       var row = document.createElement('tr');
  //       for (var j = 0; j < array[i].length; j++) {
  //           var cell = document.createElement('td');
  //           cell.textContent = array[i][j];
  //           row.appendChild(cell);
  //       }
  //       table.appendChild(row);
  //   }
  //   return table;
  // }

  // console.log("..", row)
  // table = makeTable(row)

  return (

    <div className="row">

      <ModulesControls />
      <br />
      <br />
      <br />

      <SearchButton />
      <br />
      <div>
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1"
          type="button">
          <FiFilter className="position-relative me-2" />
          Apply Filters
        </button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <table className="table table-striped">
   
          <thead>
          <tr><th>Student Name</th><th>{col_names[1]}</th><th>{col_names[2]}</th>
          </tr>
          </thead> 
          

{/* 
          {col_names.map((col) => (
            <thead>
              <tr><th>{col[0]}</th><th>{col[1]}</th><th>{col[2]}</th>
              </tr>
          
              ))} 
   */}
          <tbody>
         



              {row.map((grade) => (
                <tr>
                  <td>{grade[0]}</td><td>{grade[1]}</td><td>{grade[2]}</td>
                </tr>
              )

              )}
              </tbody>
            </table>
      </div>
    </div>

  );


}
