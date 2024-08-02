import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLocation } from "react-router";
import AssignmentControls from "./AssignmentControls";

function Assignments() {

  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const courseId = pathStrSplit[3]
  console.log("pathStrSplit", courseId)
  const assignments = useSelector((state:any) =>
     state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment:any) => assignment.course === courseId);


    console.log("courseId", courseId)


  console.log("courseassignment", courseAssignments)
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmAndDelete = (assignmentId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (shouldDelete) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (

    <div id="wd-assignments" className="row">
    {/* the header button */}
    <div id="wd-modules-controls" className="text-nowrap">
   
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
   <div className="form-group has-search col-md-5">

     <span id="wd-search" className="fa fa-search form-control-feedback"></span>
     <input type="text" className="form-control" placeholder="Search" />
   </div>

   <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end "
       onClick={() => { dispatch(
         addAssignment({ _id: new Date().getTime().toString(), title: "New Assignment", course: courseId })); 
       navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`) }}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </button>

   <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1 float-end"
     type="button">
     <FaPlus />
     Group
   </button>
 </div>

       {/*end of the header button */}
      
    
        <br />
        <div className="list-group row mt-5">
          {courseAssignments.map((assignment:any) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
              <button className="btn btn-sm btn-secondary float-end"
                onClick={() => dispatch(setAssignment(assignment))}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger float-end"
                onClick={(e) => { e.preventDefault(); confirmAndDelete(assignment._id) }}>
                Delete
              </button>
            </Link>
          ))}
        </div>
      </div>


  
  );
}
export default Assignments;