import { createSlice } from "@reduxjs/toolkit";
//import * as db from "../../Database";

const initialState = {
    // assignments: db.assignments,
    assignment: {
        _id: "A" + new Date().getTime().toString(), 
        title: "New Assignment",
        description: "New Module Description",
        points: 100,
        due: "2024-01-12",
        from: "2024-01-01",
        until: "2024-12-22",
    },
    assignments : [],

};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
           console.log("in add assignment", action.payload)
           state.assignments = [
            { ...action.payload, _id: "A" + new Date().getTime().toString() },
            ...state.assignments,
        ];
    
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment: any) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment:any) => {
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