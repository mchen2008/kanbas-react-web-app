import BootstrapForms from "../../../Labs/Lab2/BootstrapForms";
import EditorForm from "./EditorForm";

export default function AssignmentEditor() {
  return (
    <div>
       <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      <br />
      <textarea id="wd-description" className="form-control" >
        The assignment is available online Submit a link to the landing page of your Web applicaion running on
        Netlify. 
        
        The landing page should include the following:
        
      </textarea>
      <br />


  

 <EditorForm/>



  {/* <div className="d-inline-flex align-items-center">
    <label htmlFor="wd-points" className="form-label" style={{width: "200px"}} >Points</label>
    <div className="col-md-10">
      <input  className="form-control" id="wd-points" value={100} />
      </div>
  </div>  */}




  
{/* </form> */}


    </div>
  );
}
