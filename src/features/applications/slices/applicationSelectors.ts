import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { ApplicationItem } from '../../../types/application';

const selectApplications = (state: RootState) => state.Application.applications;
const selectId = (_: RootState, id: string) => id;

export const getApplicationById = createSelector(
  [selectApplications, selectId],
  (applications, id) => (applications.find(item => item.id === id) as ApplicationItem) || {},
);
