import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";
import { useLocation } from "react-router";




const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        description: "New Module Description",
        points: 100,
        dueDate: "2024-1-12",
        availableFromDate: "2024-1-1",
        availableUntilDate: "2024-12-22",
        

    },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            const a_id = "A" + new Date().getTime().toString()
            // const { pathname } = useLocation();
            // const pathStrSplit = pathname.split('/')
            // const courseId = pathStrSplit[3]
            
			state.assignments = [
				{ ...action.payload, _id:  a_id},
				...state.assignments,
			];
            console.log("new added id", a_id)
            console.log(action.payload)
		},

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },

     

    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;