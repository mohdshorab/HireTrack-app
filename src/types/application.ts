export interface InterviewRound {
  id: string;
  name: string;
  date?: string;
  status: 'Done' | 'Pending' | 'Not scheduled yet';
}

export interface ApplicationItem {
  id: string;
  companyName: string;
  role: string;
  location: string;
  salary: string;
  jdLink?: string;
  status: string;
  appliedOn: string;
  followUpDate?: string;
  notes?: string;
  rounds: InterviewRound[];
}
