import { FaCalendarAlt } from "react-icons/fa";

export default function EditorForm() {
  return (
    <div id="wd-css-responsive-forms-1">

      <div className="mb-3 row">
        <label htmlFor="wd-points"
          className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-8">
          <input type="text" className="form-control"
            id="wd-points" value="100" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group"
          className="col-sm-2 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-8">
          <select className="form-select">
            <option selected>ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams"> EXAMS</option>
            <option value="project"> PROJECT</option>
          </select>

        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label">
          Display Grade as
        </label>
        <div className="col-sm-8">
          <select className="form-select"
            id="wd-display-grade-as" >
            <option selected> Percentage</option>
          </select>

        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-8 bg-boarder p-4">
          <select className="form-select"
            id="wd-submission-type" >
            <option selected> Online</option>
          </select>
          <br />

          <h5>Online Entry Options</h5>
          <br></br>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br></br>
            <input className="form-check-input" type="checkbox" name="options" id="wd-website-url" checked />
            <label htmlFor="wd-website-url">Website URL</label>
            <br></br>
            <input className="form-check-input" type="checkbox" name="options" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br></br>
            <input className="form-check-input" type="checkbox" name="options" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br></br>
            <input className="form-check-input" type="checkbox" name="options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

      </div>



      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />


      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">
          Assign
        </label>

        <div className="col-sm-8 bg-boarder p-4" >
          <label htmlFor="wd-assign-to">Assign to</label>
          <br></br>
          <input style={{ position: "relative" }} id="wd-assign-to" className="form-control" value={"Everyone"} />
          <br />

          <div className="form-group has-feedback col-sm-12">
            <label htmlFor="wd-due-date">Due</label>
            <br></br>
            <input type="date" className="form-control" id="wd-due-date"
              value={"2024-05-13"} />

            <span className="fa fa-calendar form-control-feedback"></span>
          </div>
          <div className="row mt-4">
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="wd-available-from">Avaliable from</label>

              <input type="date" id="wd-available-from" className="form-control" value={"2024-05-06"} />

              <span className="fa fa-calendar form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback col-sm-6">
              <label htmlFor="wd-available-until">Until</label>

              <input type="date" id="wd-available-until" className="form-control" value={"2024-05-20"} />
              <span className="fa fa-calendar form-control-feedback"></span>


            </div>
          </div >
          <br /><br />
          <div className="float-end">

            <button type="button" className="btn btn-secondary m-1">
              Cancel </button>

            <button type="button" className="btn btn-danger m-1">
              Save </button>

          </div>
        </div>

      </div>



    </div>

  );
}