import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.users.push(action.payload);
    },

    deleteStudent: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
    },

    updateStudent: (state, action) => {
      const { studentId, name, email, age } = action.payload;
      const user = state.users.find((_, index) => index === studentId);

      if (user) {
        user.name = name;
        user.email = email;
        user.age = age;
      }
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
