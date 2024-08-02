import { FaPlus } from "react-icons/fa6";
import "./index.css"
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import React from "react";

export default function AssignmentControls() {


    const { pathname } = useLocation();
    const pathStrSplit = pathname.split('/')
    const courseId = pathStrSplit[3]
    const assignmentId = pathStrSplit[5]

  

    const assignments = useSelector((state:any) => state.assignmentsReducer.assignments); 
    const courseAssignments = assignments.filter(
        (assignment: any) => assignment.course === courseId);

    const assignment = useSelector((state: any) => state.assignmentsReducer.assignment);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newDefaultAssignment = {
		title: "New Assignment",
		description: "New Assignment Description",
		dueDate: "",
		points: "",
		course: courseId,
	};

    const [selectedAssignment, setSelectedAssignment] = React.useState(
		courseAssignments[0]
	);



  return (

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

  );
}