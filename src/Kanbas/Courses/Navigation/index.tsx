import { Link } from "react-router-dom";
import "./index.css";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
export default function CoursesNavigation() {

   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
   const { pathname } = useLocation();

   const pathStrSplit = pathname.split('/')
   const id = pathStrSplit[3]
   console.log("id is ", id)
  return (
    <div id="wd-courses-navigation"  className="list-group fs-5 rounded-0
     position-fixed d-none d-md-block z-2"  style={{ width: 120 }} >
   
      {/* <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
         className="list-group-item active border border-0"> Home </a>
      
      <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
         className="list-group-item text-danger border border-0"> Modules </a>
      <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
         className="list-group-item text-danger border border-0"> Piazza </a>
      <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
         className="list-group-item text-danger border border-0"> Zoom </a>
      <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
         className="list-group-item text-danger border border-0"> Assignments </a>
      <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
         className="list-group-item text-danger border border-0"> Quizzes </a>
      <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
         className="list-group-item text-danger border border-0"> Grades </a>
    </div> */}

   


{links.map((link) => (
        <Link to={`/Kanbas/Courses/${id}/${link}`} className={`list-group-item border border-0 p-0
              ${pathname.includes(link) ? "black border-left border-dark" : "text-danger"}`}>
       
          <br />
          {link}
        </Link>
      ))}



   </div>

  );
}
