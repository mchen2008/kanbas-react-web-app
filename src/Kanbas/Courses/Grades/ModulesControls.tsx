
import { MdOutlineDriveFileMove } from "react-icons/md";
import { MdOutlineDriveFileMoveRtl } from "react-icons/md";
import { LiaCogSolid } from "react-icons/lia";

export default function ModulesControls() {
  return (

    <div id="wd-modules-controls" className="text-nowrap">


      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <LiaCogSolid className="position-relative" style={{ bottom: "1px" }} />

      </button>

      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-add-module-btn" className="btn btn-lg btn-secondary dropdown-toggle">
          <MdOutlineDriveFileMoveRtl className="position-relative me-2" data-bs-toggle="dropdown" />
          Export
        </button>
      </div>
      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1 float-end"
        type="button">
        <MdOutlineDriveFileMove className="position-relative me-2" />
        Import
      </button>

    </div>



  );
}

