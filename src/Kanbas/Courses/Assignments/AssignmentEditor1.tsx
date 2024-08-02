import BootstrapForms from "../../../Labs/Lab2/BootstrapForms";
import EditorForm from "./EditorForm";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import * as db from "../../Database";
export default function AssignmentEditor1() {
  const { pathname } = useLocation();

  const pathStrSplit = pathname.split('/')
  const course_id = pathStrSplit[3]
  const assignment_id = pathStrSplit[5]
  const assignments = db.assignments;
  const assignment = assignments.filter((a) => a._id== assignment_id && a.course == course_id)[0];
 
  return (
    <div>
       <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" value = {assignment.title} />
   
      <br />
      <textarea id="wd-description" className="form-control" >
        The assignment is available online Submit a link to the landing page of your Web applicaion running on
        Netlify. 
        
        The landing page should include the following:
        
      </textarea>

      <br />

      <EditorForm/>
    </div>
  );
}