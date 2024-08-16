import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const Assignments_API = `${REMOTE_SERVER}/api/courses`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
    .get(`${Assignments_API}/${courseId}/Assignments`);

  return response.data;
};
export const createAssignment = async (courseId: string, assigment: any) => {
   //console.log(`${Assignments_API}/${courseId}/Assignments/`)
    const response = await axios.post( `${Assignments_API}/${courseId}/Assignments/`,
      assigment);
    return response.data;
  };

  
  export const findAssignment = async (AssignmentId: any) => {
    
    //console.log("find ass", `${REMOTE_SERVER}/api/assignments/${AssignmentId}`)

    const response = await axios.get( `${REMOTE_SERVER}/api/assignments/${AssignmentId}`,AssignmentId);
   
    return response.data;
  };




export const deleteAssignment = async (AssignmentId: string) => {
  const response = await axios
    .delete(`${REMOTE_SERVER}/api/assignments/${AssignmentId}`);
  return response.data;
};


export const updateAssignment = async (Assignment: any) => {
  const response = await axios.
    put(`${REMOTE_SERVER}/api/assignments/${Assignment._id}`, Assignment);
  return response.data;
};
