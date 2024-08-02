import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ModuleEditor from "./Editor";
import "./index.css"
export default function ModulesControls(
  { assignmentTitle, setAssignments, addAssignment }:
    { assignmentTitle: string; setAssignments: (name: string) => void; addAssignment: () => void; }) {

  return (

    <div id="wd-modules-controls" className="text-nowrap">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="form-group has-search col-md-5">

        <span id="wd-search" className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >

        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1 float-end"
        type="button">
        <FaPlus />
        Group
      </button>

      <ModuleEditor dialogTitle="Add Assignment" assignmentTitle={assignmentTitle}
                    setAssignments={setAssignments} addAssignment={addAssignment} />


    </div>

  );
}