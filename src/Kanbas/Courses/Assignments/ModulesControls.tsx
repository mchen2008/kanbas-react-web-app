import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./index.css"
export default function ModulesControls() {
  return (

    <div id="wd-modules-controls" className="text-nowrap">
      {/* <div id="wd-search-wrapper" className="form-group col-md-8 me-2 p-2">

        <input id="wd-search-assignment" className="form-control input-lg"
          type="search" placeholder="Search" />
      </div> */}

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      {/* <form role="search" method="get" className="search-form" 
action="<?php echo home_url(); ?>"> */}

      <div className="form-group has-search col-md-5">

        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" />
      </div>

      {/* <div className = "float-end"> */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      {/* </div>
      <div> */}
      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1 float-end"
        type="button">
        <FaPlus />
        Group
      </button>
    </div>



  );
}

