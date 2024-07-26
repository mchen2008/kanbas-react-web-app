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

export default function Assignments() {
  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const id = pathStrSplit[3]
  const assignments = db.assignments;


  return (

    <div id="wd-assignments" className="row">
      <ModulesControls />
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
              {/* <a className="wd-assignment-link"
                href="#/Kanbas/Courses/{id}/Assignments/{assignment._id}">
                {assignment._id}
              </a> */}

              <Link to={`/Kanbas/Courses/${id}/Assignments/${assignment._id}`} className="list-group-item bold border-0 p-0">
             <b> {assignment._id}</b>
              </Link>

              Multiple Modules | <b>Not avaliable until </b>May 17 at 12:00 am |
              <LessonControlButtons />
              <br></br>
              <b>Due </b> May 20 at 11:59pm | 100pts
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
