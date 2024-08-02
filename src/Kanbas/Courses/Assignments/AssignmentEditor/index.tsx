import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  { useState } from "react";

import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";


function AssignmentEditor() {
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [dueDate, setDueDate] = useState("2023-01-01");
  const [availableFromDate, setAvailableFromDate] = useState("2023-01-01");
  const [availableUntilDate, setAvailableUntilDate] = useState("2023-01-01");


  return (
    <div id="wd-assignments-edit-container" className = "row">
  <h2>Assignment Name</h2>
      <input value={assignment.title} 
             className="form-control mb-2" onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))}/>
       <br />
      <textarea className="form-control mt-3" value={module.description} placeholder="New Assignment Description"
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))}
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
            id="wd-points" value="100" />
        </div>
      </div>
      <br/>
      <div className="wd-assignments-form-item mt-3">
          <label htmlFor="due"> Due </label>
          <br/>
          <input
            type="date"
            className="form-control datepicker"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
      </div>

      <div className="row">
          <div className="col-md-6">
              <label htmlFor="available-from"> Available from </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={availableFromDate}
                onChange={(e) => setAvailableFromDate(e.target.value)}
              />

          </div>
          <div className="col-md-6">
              <label htmlFor="until"> Until </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={availableUntilDate}
                onChange={(e) => setAvailableUntilDate(e.target.value)}
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
        dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      }} className="btn btn-danger me-2">
        Save
      </button>
    </div>
    </div>
   
  );
}


export default AssignmentEditor;