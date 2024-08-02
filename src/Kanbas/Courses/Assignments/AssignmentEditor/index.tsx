import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  { useState } from "react";
import { useLocation } from "react-router";
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  addAssignment,
  updateAssignment,
  selectAssignment,
  
} from "../assignmentsReducer";
import { assignments } from "../../../Database";


function AssignmentEditor() {

  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const courseId = pathStrSplit[3]


  const assignment = useSelector((state:any) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state:any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const navigate = useNavigate();

 
  return (
    <div id="wd-assignments-edit-container" className = "row">
  <h2>Assignment Name</h2>
      <input value={assignment.title} 
             className="form-control mb-2" onChange={(e) =>
              dispatch(selectAssignment({ ...assignment, title: e.target.value, course: courseId}))}/>
       <br />
      <textarea className="form-control mt-3" value={assignment.description} placeholder="New Assignment Description"
              onChange={(e) =>
                dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
            />
   <br/>
   <br/>
   <br/>
   <br/>
<div className="mt-3 row">
        <label htmlFor="wd-points"
          className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-8">
          <input type="text" className="form-control"
            id="wd-points" value={assignment.points} 
            onChange={(e) =>
              dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
            />
        </div>
      </div>
      <br/>
      <div className="wd-assignments-form-item mt-3">
          <label htmlFor="due"> Due </label>
          <br/>
          <input
            type="date"
            className="form-control datepicker"
            value={assignment.dueDate}
            onChange={(e) =>  dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
          />
      </div>

      <div className="row">
          <div className="col-md-6">
              <label htmlFor="available-from"> Available from </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={assignment.availableFromDate}
                onChange={(e) =>dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
              />

          </div>
          <div className="col-md-6">
              <label htmlFor="until"> Until </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={assignment.availableUntilDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
              />
          </div>
      </div>
      
      <br/>
      <br/>
 
      <div className="float-end mt-3">

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={() => {
        console.log("ass_id", assignment._id)
  

        if (assignments.find((a:any) => a._id === assignment._id)) {
          dispatch(updateAssignment(assignment));
        }
        else {
          dispatch(addAssignment(assignment));
        }
        console.log("===assignment", assignment)
        console.log("===assignments", assignments)
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      }} className="btn btn-danger me-2">
        Save
      </button>
    </div>
    </div>
   
  );
}


export default AssignmentEditor;