import { createMMKV } from 'react-native-mmkv';
import { ApplicationItem } from '../types/application';

export const storage = createMMKV();

const APPLICATIONS_KEY = 'applications_data';

export const getApplications = (): ApplicationItem[] => {
  try {
    const jsonStr = storage.getString(APPLICATIONS_KEY);
    if (jsonStr) {
      return JSON.parse(jsonStr) as ApplicationItem[];
    }
  } catch (error) {
    console.error('Failed to parse applications from storage:', error);
  }
  return [];
};

export const saveApplication = (app: ApplicationItem): void => {
  try {
    const currentApps = getApplications();
    const newApps = [app, ...currentApps];
    storage.set(APPLICATIONS_KEY, JSON.stringify(newApps));
  } catch (error) {
    console.error('Failed to save application to storage:', error);
  }
};

export const updateApplication = (updatedApp: ApplicationItem): void => {
  try {
    const currentApps = getApplications();
    const newApps = currentApps.map(app =>
      app.id === updatedApp.id ? updatedApp : app
    );
    storage.set(APPLICATIONS_KEY, JSON.stringify(newApps));
  } catch (error) {
    console.error('Failed to update application in storage:', error);
  }
};
