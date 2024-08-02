import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import * as db from "../../Database";
import { useParams, useLocation } from "react-router";
import "./index.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
export default function Assignments() {
  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const id = pathStrSplit[3]
  //const assignments = db.assignments;

  const [assignments, setAssignments] = useState(db.assignments);

  const assignment: any={
    _id: "0", title: "New Assignment", description: "New Assignment Description",
    points:"100", dueData:"2024-09-10", availableFromDate:"2024-08-10", availableUntilDate:"2024-09-10", 
  }


  const addAssignment = () => {
    const newAssignment = { ...assignment,
                        _id: new Date().getTime().toString(),
                      };
        setAssignments([...assignments, newAssignment]);
  };

console.log(assignments)

  return (

    <div id="wd-assignments" className="row">
         {/* <div id="wd-modules-controls" className="text-nowrap">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="form-group has-search col-md-5">

        <span id="wd-search" className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>

      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={addAssignment}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1 float-end"
        type="button">
        <FaPlus />
        Group
      </button>


    >
    </div> */}
    {/* <ModulesControls setAssignments={setAssignments} assignmentTitle={assignment} addAssignment={addAssignment}/> */}
    <button className="btn" onClick={addAssignment}>
Add 

    </button>
      <br /><br /><br /><br />


      <ul id="wd-assignments-title" className="list-group rounded-0">
      <li className="wd-module list-group-item p-0 fs-5 border-gray "> 
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="fs-3" />
          <IoMdArrowDropdown />
          ASSIGNMENTS
          <ModuleControlButtons />
        
        </div>
      </li>
        {assignments
          .filter((assignment: any) => assignment.course === id)
          .map((assignment: any) => (
           
            <div>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div className="d-flex">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes className="bg-light me-2 fs-3" />
              <div className="ml-3 container">
              <Link to={`/Kanbas/Courses/${id}/Assignments/${assignment._id}`} className="list-group-item bold border-0 p-0">
             <b> {assignment._id}</b>
              </Link>
              Multiple Modules | <b>Not avaliable until </b> {assignment.until} at 11:59pm | 
              <LessonControlButtons />
              <br></br>
              <b>Due </b> {assignment.due} at 11:59pm | 100pts
              <br></br>
              </div>
              </div>
            </li>
            </div>
          ))}




      </ul>
    </div>
  );
}