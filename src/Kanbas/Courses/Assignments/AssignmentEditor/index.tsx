import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router";
// import '../styles.css';
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

  const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const navigate = useNavigate();


  return (
    <div className="row">
      <label htmlFor="wd-assignment-name" className="form-label h5">Assignment Name</label>
      <br />
      <input id="wd-assignment-name" value={assignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, title: e.target.value, course: courseId }))} />
      <br />
      <textarea className="form-control mt-3" value={assignment.description} placeholder="New Assignment Description"
        onChange={(e) =>
          dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
      />
      <br />
      <br />
      <div className="mt-4 row">
        <label htmlFor="wd-points"
          className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control"
            id="wd-points" value={assignment.points}
            onChange={(e) =>
              dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="mb-3 row">

        <label className="col-sm-2 col-form-label">
          Assign
        </label>

        <div className="col-sm-8 boarder p-4" >
          <label htmlFor="due"> Due </label>
          <br />
          <input
            type="date"
            className="form-control datepicker"
            value={assignment.due}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, due: e.target.value }))}
          />


          <div className="row mt-4">
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="available-from"> Available from </label>
              <br />
              <input
                type="date"
                className="form-control datepicker"
                value={assignment.from}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, from: e.target.value }))}
              />
            </div>
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="until"> Until </label>
              <br />
              <input
                type="date"
                className="form-control datepicker"
                value={assignment.until}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, until: e.target.value }))}
              />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div>
          <div className="float-end m-5">

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary me-1">
              Cancel
            </Link>
            <button onClick={() => {
              console.log("ass_id", assignment._id)


              if (assignments.find((a: any) => a._id === assignment._id)) {
                dispatch(updateAssignment(assignment));
              }
              else {
                dispatch(addAssignment(assignment));
              }
              navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }} className="btn btn-danger me-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}


export default AssignmentEditor;