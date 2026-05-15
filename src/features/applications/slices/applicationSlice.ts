import { createSlice } from '@reduxjs/toolkit';
import { ApplicationItem } from '../../../types/application';
import { getApplications, saveApplication } from '../../../services/storage';

type InitialStateType = {
  applications: ApplicationItem[];
};

const initialState: InitialStateType = {
  applications: [],
};

const ApplicationSlice = createSlice({
  name: 'hiretrack/applicationSlice',
  initialState,
  reducers: {
    addApplication(state, action: { payload: ApplicationItem }) {
      saveApplication(action.payload);
      state.applications = getApplications();
    },
    setApplications(state) {
      state.applications = getApplications();
    },
  },
});

export const { addApplication, setApplications } = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
