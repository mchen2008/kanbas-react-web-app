import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: {
        _id: new Date().getTime().toString(),
        title: "New Assignment",
        description: "New Module Description",
        points: 100,
        dueDate: "2023-12-12",
        availableFromDate: "",
        availableUntilDate: "",

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
            state.assignments = [action.payload, ...state.assignments];
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

        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },

     

    },
});



export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;