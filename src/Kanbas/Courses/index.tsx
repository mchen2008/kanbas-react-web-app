import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
            <Route path="/:id/Home" element={<Home />} />
            <Route path="/:id/Assignments" element={<Assignments />} />
            <Route path="/:id/Modules" element={<Modules />} />
            <Route path="/:id/Assignments/:id" element={<AssignmentEditor />} />

            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}


