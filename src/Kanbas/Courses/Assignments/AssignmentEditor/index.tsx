import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as db from "../../../Database";
import { Navigate, Route, Routes, useLocation } from "react-router";


function AssignmentEditor() {

    const { pathname } = useLocation();

    const pathStrSplit = pathname.split('/')
    const courseId = pathStrSplit[3]
    const assignmentId = pathStrSplit[5]
    const assignments = db.assignments;
    const assignment = assignments.filter((a) => a._id== assignmentId && a.course == courseId)[0];
 

    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="me-5">
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                className="form-control mb-2" />
            <hr />
            <div className="float-end me-1">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger me-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;