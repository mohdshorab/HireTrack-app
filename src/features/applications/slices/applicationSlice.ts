import { createSlice } from '@reduxjs/toolkit';
import { ApplicationItem } from '../../../types/application';
import { getApplications, saveApplication, updateApplication } from '../../../services/storage';

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
    patchApplication(state, action: { payload: ApplicationItem }) {
      updateApplication(action.payload);
      state.applications = getApplications();
    },
  },
});

export const { addApplication, setApplications, patchApplication } = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
