import { IoEllipsisVertical } from "react-icons/io5";

import { FaPlus } from "react-icons/fa6";
import "./index.css"
export default function AssignmentButton() {
  return (
    <div className="float-end">
      <span className =  "wd-rounded-corners-all-around z-2 me-2 border wd-border-thin wd-border-gray" >40% of Total </span>
      <FaPlus className = "me-1"/>
      <IoEllipsisVertical className="fs-4 me-1" />
    </div>
);}