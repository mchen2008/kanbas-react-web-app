import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import "./index.css"
export default function Assignments() {
  return (

    <div id="wd-assignments">
      <ModulesControls />
      <br /><br /><br /><br />


      <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 fs-5 border-gray "> 
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="fs-3" />
          {/* <button id="wd-publish-all-btn" className="btn btn-secondary dropdown-toggle"
            type="button" data-bs-toggle="dropdown">
          </button> */}
          <IoMdArrowDropdown />
          ASSIGNMENTS
          <ModuleControlButtons />
          </div>
          </li>
          <ul className="wd-assignment-list list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes className="bg-light me-2 fs-3" />
              <div className="ml-3 d-inline ">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a>
                <br></br>

                Multiple Modules | <b>Not avaliable until </b>May 6 at 12:00 am |
                <LessonControlButtons />
                <br></br>
                <b>Due </b> May 13 at 11:59pm | 100pts
                <br></br>
              </div>
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes className="bg-light me-2 fs-3" />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A2 - CSS + BOOTSTRAP
              </a>
              <br></br>
              Multiple Modules | <b>Not avaliable until </b>May 17 at 12:00 am |
              <LessonControlButtons />
              <br></br>
              <b>Due </b> May 20 at 11:59pm | 100pts
              <br></br>

            </li>


            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrNotes className="bg-light me-2 fs-3" />
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A3 - JAVASCRIPT + REACT
              </a>
              <br></br>
              Multiple Modules | <b>Not avaliable until </b>May 20 at 12:00 am |
              <LessonControlButtons />
              <br></br>
              <b>Due </b> May 27 at 11:59pm | 100pts
              <br></br>

            </li>

          </ul>

        {/* </div> */}
        </ul>
    </div>
  );
}
