import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import { courses } from "../Database";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams,useLocation } from "react-router";
import { FaInbox, FaAlignJustify, FaRegCircleUser } from "react-icons/fa6";
import "./styles.css"

import Grades from "./Grades";
export default function Courses() {
  const { pathname } = useLocation();
  console.log({pathname})
  const pathStrSplit = pathname.split('/')
  const id = pathStrSplit[3]

  console.log({id})
  const course = courses.find((course) => course._id === id);

  console.log(course)
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />

               {course && course.name} &gt; {pathname.split("/")[4]}
               </h2>
      <hr />
      <div>
      <CoursesNavigation />
      <div className='wd-main-content-offset p-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/Home" element={<Home />} />
          <Route path="/:id/Assignments" element={<Assignments />} />
          <Route path="/:id/Modules" element={<Modules />} />
          <Route path="/:id/Grades" element={<Grades />} />
          <Route path="/:id/Assignments/:id" element={<AssignmentEditor />} />
        </Routes>

      </div>
      </div>
    </div>
  );
}


