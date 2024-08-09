import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: "M101",
        name: "Introduction to Rocket Propulsion",
        description: "Basic principles of rocket propulsion and rocket engines.",
        course: "RS101",
    })
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <h4>Retrieving Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />

            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />
            <h4>Modifying Module Name</h4>
            <a id="wd-update-Module-Name"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                Update Module Name
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />

            <h4>Update Score</h4>
            <a id="wd-update-Assignment-Score"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}>
                Update Assignment Score
            </a>


            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
            <hr />
            <h4>Update Completed Status</h4>
            <label htmlFor="complete-checkbox" >

                {Boolean(assignment.completed).toString()}
            </label>

            <input
                type="checkbox" id="complete-checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={Boolean(assignment.completed)}
                className="mb-2 w-20 ms-2"
            />
            <a
                href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}
                className="btn btn-primary ms-2" >
                Update Completed to {Boolean(assignment.completed).toString()}
            </a>

            <br />
            <hr />

            <h4>Update Assignment Description</h4>
            <a id="wd-update-Assignment-Description"
                className="btn btn-primary float-end"
                href={`${REMOTE_SERVER}/lab5/assignment/description/${assignment.description}`}>
                Update Assignment Description
            </a>

            <input className="form-control w-75" id="wd-assignment-description"
                value={assignment.description} onChange={(e) =>
                    setAssignment({ ...assignment, description: e.target.value })}
            />
            <hr />


        </div>
    );
}
