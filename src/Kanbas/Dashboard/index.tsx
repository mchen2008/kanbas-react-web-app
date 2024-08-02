import { Link } from "react-router-dom";
import React, {useState} from "react";
import * as db from "../Database";
export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  


  // const baseUrl = "../../../public/images/";
  // console.log("Current directory:", __dirname);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"s
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
    
      <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
</h5>
      <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea value={course.description} className="form-control"
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

<br/>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                <img src={course.image} height="{160}" ></img>
    
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                    
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>


                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// import "./index.css"
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
    
//         <div id="wd-dashboard-courses" className="row">
//     <div className="row row-cols-1 row-cols-md-5 g-4">
      
//       <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100" >
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/1234/Home">
//             <img className="card-img-top img-fluid" src="/images/react.png" width="100%" />
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//                  CS1234 React JS
//               </h5>
//                <p className="card-text">
//                   Full Stack software developer
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>


//       <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/2345/Home">
//             <img src="/images/algorithm.jpg" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS2345 Algorithms
//               </h5>
//                <p className="card-text">
//                Algorithm
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>


//       <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/3456/Home">
//             <img src="/images/cloud.png" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS3456 Cloud Computing
//               </h5>
//                <p className="card-text">
//                Cloud Computing
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>





//         <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/4567/Home">
//             <img src="/images/angular.png" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS4567 Angular
//               </h5>
//                <p className="card-text">
//                Angular
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>



//       <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//             href="#/Kanbas/Courses/5678/Home">
//             <img src="/images/security.png" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS5678 Network Security
//               </h5>
//                <p className="card-text">
//                Network Security
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>

// <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/6789/Home">
//             <img src="/images/ai.jpg" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS6789 Artificial Intelligence
//               </h5>
//                <p className="card-text">
//                Artificial Intelligence
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>

// <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "250px"}}>
//         <div className="card h-100">
//           <a className="wd-dashboard-course-link text-decoration-none text-dark"
//              href="#/Kanbas/Courses/7890/Home">
//               <img src="/images/cv.png" width="100%" className="card-img-top img-fluid"/>
//             <div className="card-body">
//               <h5 className="wd-dashboard-course-title card-title">
//               CS7890 Computer Vision
//               </h5>
//                <p className="card-text">
//                Computer Vision
//                 </p>
//               <button className="btn btn-primary"> Go </button>
//             </div>
//           </a>
//         </div>
//       </div>

//       </div>
//     </div>
//     </div>
//   );
// }
