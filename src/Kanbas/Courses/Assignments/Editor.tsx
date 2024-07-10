export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web applicaion running on
        Netlify. 
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments"> ASSIGNMENTS</option>
              <option value="quizzes"> QUIZZES</option>
              <option value="exams"> EXAMS</option>
              <option value="project"> PROJECT</option>
            </select>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage"> Percentage</option>
            </select>
          </td>
        </tr>
        <br></br>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type </label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online"> Online </option>
            </select>

            <p></p>
            <label>Online Entry Options</label>
            <br></br>
            <input type="checkbox" name="options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br></br>
            <input type="checkbox" name="options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br></br>
            <input type="checkbox" name="options" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br></br>
            <input type="checkbox" name="options" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br></br>
            <input type="checkbox" name="options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br></br>
          </td>
        </tr>



        <br></br>
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <label htmlFor="wd-assign-to">Assign to</label>
          <br></br>
          <input id="wd-assign-to" value={"Everyone"} />
          <p></p>
          <label htmlFor="wd-due-date">Due</label>
          <br></br>
          <input type="date" id="wd-due-date" value={"2024-05-13"} />

          <p></p>
          <tr>

            <td align="left" valign="top">
              <label htmlFor="wd-available-from">Avaliable from</label>
              <br></br>
              <input type="date" id="wd-available-from" value={"2024-05-06"} />
              <br></br>
            </td>

            <td align="left" valign="top">
              <label htmlFor="wd-available-until">Until</label>
              <br></br>
              <input type="date" id="wd-available-until" value={"2024-05-20"} />
              <br></br>
            </td>


          </tr>


        </tr>
        <br></br>


      </table>
    </div>
  );
}
