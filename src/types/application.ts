export interface InterviewRound {
  id: string;
  date?: string;
  status: 'done' | 'pending' | 'null';
  label: 'applied' | 'screening' | 'round' | 'HR';
  result: 'cleared' | 'rejected' | null;
}

export interface ApplicationItem {
  id: string;
  companyName: string;
  role: string;
  location: string;
  salary: string | null;
  jdLink?: string | null;
  status: 'applied' | 'interview' | 'shortlisted' | 'offer' | 'rejected';
  appliedOn: string | null;
  followUpDate?: string | null;
  notes?: string | null;
  pipeline?: InterviewRound[];
  createdAt: number;
  updatedAt: number;
}
