import { Link } from "react-router-dom";
import "./index.css";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
export default function CoursesNavigation() {

   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
   const { pathname } = useLocation();

   const pathStrSplit = pathname.split('/')
   const id = pathStrSplit[3]
 
  return (
    <div id="wd-courses-navigation"  className="list-group fs-5 rounded-0
     position-fixed d-none d-md-block z-2"  style={{ width: 120 }} >
   

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
