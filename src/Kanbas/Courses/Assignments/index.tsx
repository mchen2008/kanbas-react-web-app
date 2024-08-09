import React from "react";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
//import LessonControlButtons from "../Modules/LessonControlButtons";
import { useState, useEffect } from "react";
import * as client from "./client";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLocation } from "react-router";
import AssignmentButton from "./AssignmentButtons";

function Assignments() {

  const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const courseId = pathStrSplit[3]

  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments);

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(courseId as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);


  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === courseId);


  //console.log("in out index assignments", assignments)

  const dispatch = useDispatch();

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(courseId as string, assignment);
    dispatch(addAssignment(newAssignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    console.log("remove assignmentId:", assignmentId)
    dispatch(deleteAssignment(assignmentId));
  };


  const chooseAssignment = async (assignmentId: string) => {
    await client.findAssignmentsForCourse(courseId);
    console.log("find assignmentId:", assignmentId)
    dispatch(selectAssignment(assignmentId));
  };

  const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);

  const navigate = useNavigate();

  const confirmAndDelete = (assignmentId: string) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (shouldDelete) {
     //dispatch(deleteAssignment(assignmentId));
      removeAssignment(assignmentId); 
  }};



  const saveAssignment = async (assignment: any) => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
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
          onClick={() => {
            // dispatch(
            //   selectAssignment({ _id: new Date().getTime().toString(), title: "New Assignment", course: courseId }));
            //createAssignment({ _id: new Date().getTime().toString(), title: "New Assignment", course: courseId });
            createAssignment({});

           // navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`)
          }}>
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
      <br /><br /><br /><br />

      <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 fs-5 border-gray ">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-3" />
            <IoMdArrowDropdown />
            ASSIGNMENTS
            <AssignmentButton />

          </div>
        </li>
        {courseAssignments.map((assignment: any) => (

          <div>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <div className="d-flex">
                <BsGripVertical className="me-2 fs-3" />
                <GrNotes className="bg-light me-2 fs-3" />
                <div className="ml-3 container">

                  <Link key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item bold border-0 p-0">
                    <b> {assignment._id}</b>

                    <button className="btn btn-sm btn-secondary float-end"
                      onClick={() => 
                      // dispatch(selectAssignment(assignment))
                      chooseAssignment(assignment._id)
                       }>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger float-end me-1"
                      onClick={(e) => { e.preventDefault(); confirmAndDelete(assignment._id) }}>
                      Delete
                    </button>
                  </Link>
                  <b> Title: {assignment.title}</b>
                  <br />
                  Multiple Modules | <b>Not avaliable until </b>{assignment.until} at 12:00 am |

                  <br></br>
                  <b>Due </b> {assignment.due} at 11:59pm | 100pts
                  <br></br>
                </div>
              </div>
            </li>
          </div>
        ))}

      </ul>
    </div>

  );
}
export default Assignments;