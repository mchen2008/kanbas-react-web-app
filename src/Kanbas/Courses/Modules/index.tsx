import { BsGripVertical} from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import WeekControlButtons from "./ModuleControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams, useLocation } from "react-router";
// import * as db from "../../Database";
import store from "../../store";
import { Provider } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import React, { useState, useEffect  } from "react";

export default function Modules() {

   const { pathname } = useLocation();
   const pathStrSplit = pathname.split('/')
   const id = pathStrSplit[3]
   const { modules } = useSelector((state: any) => state.modulesReducer);
   const dispatch = useDispatch();
   const fetchModules = async () => {
    const modules = await client.findModulesForCourse(id as string);
  
    dispatch(setModules(modules));
  };
 
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModule = async (module: any) => {
    const newModule = await client.createModule(id as string, module);
    dispatch(addModule(newModule));
  };

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    fetchModules();
  }, []);

   const [moduleName, setModuleName] = useState("");
  
   
  return (
<Provider store={store}>
<div  className="row">
  <ModulesControls setModuleName={setModuleName} moduleName={moduleName}   
  addModule={() => {
          //dispatch(addModule({ name: moduleName, course: id }));
          createModule({ name: moduleName, course: id });
          setModuleName("");
        }}
/><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
  {modules
          .filter((module: any) => module.course === id)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
              //  onChange={(e) => dispatch(
              //   updateModule({ ...module, name: e.target.value })}
              onChange={(e) => saveModule({ ...module, name: e.target.value })}

               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  //  dispatch(updateModule({ ...module, editing: false }));
                  saveModule({ ...module, editing: false });
                 }
               }}
               value={module.name}/>
      )}

<ModuleControlButtons
        moduleId={module._id}
        //deleteModule={(moduleId) =>{dispatch(deleteModule(moduleId));}}
        deleteModule={(moduleId) => { removeModule(moduleId); }}
        editModule={(moduleId) => dispatch(editModule(moduleId))}/>

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

</Provider>
);}
