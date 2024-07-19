
import { MdOutlineDriveFileMove } from "react-icons/md";
import { MdOutlineDriveFileMoveRtl } from "react-icons/md";
import { LiaCogSolid } from "react-icons/lia";

export default function SearchButton() {
  return (

    <div className="row">


      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <form role="search" method="get" className="search-form"
        action="<?php echo home_url(); ?>">

        <div className="form-group has-search col-md-5">
          <label htmlFor="wd-search-students"> Student Names </label>
          <span className="fa fa-search form-control-feedback"></span>
          <select className="form-select" >Search Students
          </select>
        </div>

        <div className="form-group has-search m-3 col-md-5">
          <label htmlFor="wd-assign-names"> Assignment Names  </label>
          <span className="fa fa-search form-control-feedback"></span>
          <select className="form-select" >Search Assignments
          </select>

        </div>
      </form>

    </div>


  );
}

