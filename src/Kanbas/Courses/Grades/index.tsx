import ModulesControls from "./ModulesControls";
import SearchButton from "./Search";
import "./index.css"
import { FiFilter } from "react-icons/fi";
export default function Grades() {
  return (


    <div id="wd-css-responsive-tables">

      <ModulesControls />
      <br />
      <br />
      <br />

      <SearchButton />
      <br />

      <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary  me-1"
        type="button">
        <FiFilter className="position-relative me-2" />
        Apply Filters
      </button>


      <table className="table table-striped">
        <thead>
          <tr><th>Student Name</th><th>A1</th><th>A2</th><th>A3</th><th>A4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Adams</td><td>100%</td><td>96.6%</td><td>92.18%</td><td>66.22%</td>
          </tr>
          <tr>
            <td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
          </tr>
          <tr>
            <td>Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
          </tr>
          <tr>
            <td>Hao Bao</td><td>100%</td><td>100%</td><td>98.3%</td><td>98.99%</td>
          </tr>
          <tr>
            <td>Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td>
          </tr>

        </tbody>
      </table>
    </div>

  );


}