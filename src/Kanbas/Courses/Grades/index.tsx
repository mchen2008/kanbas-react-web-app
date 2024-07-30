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
  const grades = db.grades;
  const users = db.users;
  const a = [1, 2, 3]
  console.log("testtest4")
  const e = [4, ...a]
const [f] = e
console.log(f)
  console.log(f)

  const handleClick = (parameter = "Hello") => {
    console.log(parameter)
  }

  let assignment_ids = db.assignments.filter((a) => a.course == course_id).map(a=> a._id)
  const students = db.enrollments.filter((a) => a.course == course_id).map(a=> a.user);

  console.log("---students", students)
  console.log("---assignment_ids", assignment_ids)

  const zeros = (m, n) => [...Array(m)].map(e => Array(n).fill(0));

  var input_table = zeros(students.length, assignment_ids.length+1);

  for (let j = 0; j < students.length; j++) {
    const username = users.filter((a) => a._id == students[j]);
    
    input_table[j][0] = username[0].firstName + " " + username[0].lastName;

    console.log("username", input_table[j][0] );

    for (let i = 0; i < assignment_ids.length; i++) {
      console.log("-----------inside for loop:------------", assignment_ids[i]);

      console.log(grades.filter((a) => a.student == students[j] && a.assignment == assignment_ids[i]));
      const k = grades.findIndex((a) => a.student == students[j] && a.assignment == assignment_ids[i]);
      
      console.log("k", k)
  
      if (k != -1) {
   
      input_table[j][i+1] = grades[k].grade;
      }
 
    }
}
  console.log("-----------input table:------------")
  console.log(input_table)



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
            <tr><th>Student Name</th><th>{assignment_ids[1]}</th><th>{assignment_ids[2]}</th>
            </tr>
          </thead>


          <tbody>


            {input_table.map((grade) => (
              <tr>
                <td>{grade[0]}</td><td>{grade[1]}</td><td>{grade[2]}</td>
              </tr>
            )

            )}
          </tbody>
        </table>
        <button onClick={handleClick}>
  Hello
</button>
      </div>
    </div>

  );


}
