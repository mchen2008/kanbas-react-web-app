import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./index.css";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
	addAssignment,
	updateAssignment,
	selectAssignment,
} from "../assignmentsReducer";

function Editor() {
	const { pathname } = useLocation();
  const pathStrSplit = pathname.split('/')
  const courseId = pathStrSplit[3]

	const assignments = useSelector(
		(state) => state.assignmentsReducer.assignments
	);
	const assignment = useSelector(
		(state) => state.assignmentsReducer.assignment
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			<div className="wd-assignments mx-5 d-flex flex-column">
				<div className="wd-assignments-header my-2">
					<button
						type="button"
						className="wd-module-header-settings btn btn-sm btn-secondary mx-1 float-end"
					>
						<FaEllipsisVertical />
					</button>
					<div className="mx-2 my-1 float-end wd-assignments-editor-status">
						<FaCircleCheck color="green" className="mx-1" />
						Published
					</div>
				</div>
				<hr />
				<div className="wd-assignments-editor my-2">
					<div className="mb-3">
						<label
							htmlFor="wd-assignments-name"
							className="form-label"
						>
							Assignment Name
						</label>
						<input
							type="text"
							className="form-control"
							id="wd-assignments-name"
							value={assignment.title}
							onChange={(e) =>
								dispatch(
									selectAssignment({
										...assignment,
										title: e.target.value,
									})
								)
							}
						/>
					</div>
					<div className="mb-3">
						<textarea
							className="form-control"
							id="wd-assignment-description"
							rows="3"
							value={assignment.description}
							onChange={(e) =>
								dispatch(
									selectAssignment({
										...assignment,
										description: e.target.value,
									})
								)
							}
						></textarea>
					</div>
					<div className="container">
						<div className="row my-3">
							<div className="col-3 text-end">Points</div>
							<div className="col-8">
								<input
									type="text"
									className="form-control"
									id="wd-assignments-points"
									value={assignment.points}
									onChange={(e) =>
										dispatch(
											selectAssignment({
												...assignment,
												points: e.target.value,
											})
										)
									}
								/>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Assignment Group
							</div>
							<div className="col-8">
								<select
									className="form-select"
									defaultValue={"1"}
								>
									<option value="1">ASSIGNMENTS</option>
								</select>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Display Grade as
							</div>
							<div className="col-8">
								<select
									className="form-select"
									defaultValue={"1"}
								>
									<option value="1">Percentage</option>
								</select>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end"></div>
							<div className="col-8">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-final-count"
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-final-count"
									>
										Do not count this assignment towards the
										final grade
									</label>
								</div>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">
								Submission Type
							</div>
							<div className="col-8 border">
								<select
									className="form-select my-2 w-50"
									defaultValue={"1"}
								>
									<option value="1">Online</option>
								</select>
								<b>Online Entry Options</b>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-text-entry"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-text-entry"
									>
										Text Entry
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-web-url"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-web-url"
									>
										Website URL
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-media-rec"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-media-rec"
									>
										Media Recordings
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-student-annotation"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-student-annotation"
									>
										Student Annotation
									</label>
								</div>
								<div className="form-check my-2">
									<input
										className="form-check-input"
										type="checkbox"
										defaultValue=""
										id="wd-assignments-file-up"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="wd-assignments-file-up"
									>
										File Uploads
									</label>
								</div>
							</div>
						</div>
						<div className="row my-3">
							<div className="col-3 text-end">Assign</div>
							<div className="col-8 border rounded">
								<label
									className="form-check-label mt-2"
									htmlFor="wd-assignments-assigned"
								>
									<b>Assign to</b>
								</label>
								<input
									type="text"
									className="form-control mb-2"
									id="wd-assignments-assigned"
									defaultValue="Everyone"
								/>

								<label
									className="form-check-label mt-2"
									htmlFor="wd-assignments-due"
								>
									<b>Due</b>
								</label>
								<input
									type="date"
									className="form-control"
									value={assignment.dueDate}
									onChange={(e) =>
										dispatch(
											selectAssignment({
												...assignment,
												dueDate: e.target.value,
											})
										)
									}
								/>
								<div className="row mt-3">
									<div className="col">
										<label
											className="form-check-label"
											htmlFor="wd-assignments-due"
										>
											<b>Available from</b>
										</label>
										<input
											type="date"
											className="form-control"
											value={assignment.availableFromDate}
											onChange={(e) =>
												dispatch(
													selectAssignment({
														...assignment,
														availableFromDate:
															e.target.value,
													})
												)
											}
										/>
									</div>
									<div className="col">
										<label
											className="form-check-label"
											htmlFor="wd-assignments-due"
										>
											<b>Until</b>
										</label>
										<input
											type="date"
											className="form-control"
											value={
												assignment.availableUntilDate
											}
											onChange={(e) =>
												dispatch(
													selectAssignment({
														...assignment,
														availableUntilDate:
															e.target.value,
													})
												)
											}
										/>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-12 text-center px-0">
										<button
											type="button"
											className="wd-assignments-add btn btn-secondary w-100 px-0 rounded-bottom"
										>
											+ Add
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="wd-assignments-footer">
						<input
							className="form-check-input my-2"
							type="checkbox"
							defaultValue=""
							id="wd-assignments-notify"
						/>
						<label
							className="form-check-label ms-1 my-1"
							htmlFor="wd-assignments-notify"
						>
							Notify users that this content has changed
						</label>
						<button
							onClick={() => {
								if (assignments.find((a) => a._id === assignment._id)) {
									dispatch(updateAssignment(assignment));
								}
								else {
									dispatch(addAssignment(assignment));
								}
								navigate(
									`/Kanbas/Courses/${courseId}/Assignments`
								);
								console.log("courseID in editor ",courseId)
								console.log("assignment in editor ", assignment)
								console.log("assignments in editor", assignments)
							}}
							className="btn btn-success float-end mx-1 my-2"
							id="wd-assignments-save"
						>
							Save
						
						</button>
				
						<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
							<button
								className="btn btn-secondary mx-1 my-2 float-end"
								id="wd-assignments-cancel"
							>
								Cancel
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Editor;