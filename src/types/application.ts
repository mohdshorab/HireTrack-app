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
  salary: string | null;
  jdLink?: string | null;
  status: string;
  appliedOn: string | null;
  followUpDate?: string | null;
  notes?: string | null;
  rounds: InterviewRound[];
  createdAt: number;
  updatedAt: number;
}
