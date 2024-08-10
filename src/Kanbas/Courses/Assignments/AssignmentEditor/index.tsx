import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import * as client from "../client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from "react";
import {
  addAssignment,
  updateAssignment,
  selectAssignment,
  setAssignments,
} from "../assignmentsReducer";



function AssignmentEditor() {

  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const courseId = pathStrSplit[3]

  const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const assignmentId = pathStrSplit[5]
  const fetchAssignment = async () => {
    const assignment = await client.findAssignment(assignmentId as string);
    dispatch(selectAssignment(assignment));
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  const thisAssignment = Array.isArray(assignment)? assignment[0]:assignment
  console.log("here this ID is ", thisAssignment)

  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(courseId as string, assignment as any);
    dispatch(addAssignment(newAssignment));
  };
  return (
    <div className="row">
      <label htmlFor="wd-assignment-name" className="form-label h5">Assignment Name</label>
      <br />
      <input id="wd-assignment-name" value={thisAssignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(selectAssignment({ ...thisAssignment, title: e.target.value, course: courseId }))} />
      <br />
      <textarea className="form-control mt-3" value={thisAssignment.description} placeholder="New Assignment Description"
        onChange={(e) =>
          dispatch(selectAssignment({ ...thisAssignment, description: e.target.value }))}
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
            id="wd-points" value={thisAssignment.points}
            onChange={(e) =>
              dispatch(selectAssignment({ ...thisAssignment, points: e.target.value }))}
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
            value={thisAssignment.due}
            onChange={(e) => dispatch(selectAssignment({ ...thisAssignment, due: e.target.value }))}
          />


          <div className="row mt-4">
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="available-from"> Available from </label>
              <br />
              <input
                type="date"
                className="form-control datepicker"
                value={thisAssignment.from}
                onChange={(e) => dispatch(selectAssignment({ ...thisAssignment, from: e.target.value }))}
              />
            </div>
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="until"> Until </label>
              <br />
              <input
                type="date"
                className="form-control datepicker"
                value={thisAssignment.until}
                onChange={(e) => dispatch(selectAssignment({ ...thisAssignment, until: e.target.value }))}
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
              console.log("ass_id", thisAssignment._id)
              if (assignments.find((a: any) => a._id === thisAssignment._id)) {
                //dispatch(updateAssignment(thisAssignment));
                saveAssignment(thisAssignment);
               // console.log("assignments", assignments)
              }
              else {
               // dispatch(addAssignment(assignment));
               createAssignment(thisAssignment);
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

