import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaAlignJustify, FaRegCircleUser } from "react-icons/fa6";

import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />

      Course 1234</h2>
      <hr />
    
            <CoursesNavigation />
     
            <div>
            <Routes>
            <Route path="/home" element={<Navigate to="Home" />} />
            <Route path="/:id/Home" element={<Home />} />
            <Route path="/:id/Assignments" element={<Assignments />} />
            <Route path="/:id/Modules" element={<Modules />} />
            <Route path="/:id/Assignments/:id" element={<AssignmentEditor />} />

            </Routes>
            </div>
    </div>
  );
}


