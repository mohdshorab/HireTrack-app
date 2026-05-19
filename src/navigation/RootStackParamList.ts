type RootStackParamList = {
  loginscreen: undefined;
  dashboard: undefined;
  manageApplication: {
    id?: string;
  } | undefined;
  applicationDetails: {
    applicationId: string;
  };
};

export default RootStackParamList;
