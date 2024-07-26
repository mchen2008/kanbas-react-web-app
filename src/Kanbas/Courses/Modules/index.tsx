import { BsGripVertical} from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import WeekControlButtons from "./ModuleControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams, useLocation } from "react-router";
import * as db from "../../Database";



export default function Modules() {

   const { pathname } = useLocation();
   const pathStrSplit = pathname.split('/')
   const id = pathStrSplit[3]
   const modules = db.modules;
 
   
  return (

<div id="wd-modules" className="row">
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
  {modules
          .filter((module: any) => module.course === id)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

  
  </ul>
</div>


);}
