export type ActivityType = 'kajian' | 'dauroh' | 'iktikaf';

export interface Activity {
  id: string;
  institutionId: string;
  type: ActivityType;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  registrationDeadline?: string;
  maxParticipants?: number;
  currentParticipants: number;
  requirements: string[];
  price?: number;
  images: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface IktikafSchedule {
  day: number;
  activities: {
    time: string;
    title: string;
    description: string;
  }[];
}

export interface ScholarInfo {
  name: string;
  bio: string;
  image: string;
}

export interface IktikafProgram extends Activity {
  type: 'iktikaf';
  duration: number; // days
  mealsProvided: boolean;
  accommodationProvided: boolean;
  scholarInfo: ScholarInfo;
  schedule: IktikafSchedule[];
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface IktikafRegistration {
  id: string;
  programId: string;
  participantInfo: {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: 'male' | 'female';
    address: string;
    occupation?: string;
  };
  healthInfo: {
    vaccinationStatus: 'vaccinated' | 'unvaccinated' | 'partial';
    healthCondition: 'healthy' | 'has_medical_condition';
    medicalHistory?: string;
    specialNeeds?: string;
  };
  emergencyContact: EmergencyContact;
  programPreferences: {
    durationPreference: 'full_10_days' | 'partial';
    mealsNeeded: boolean;
    accommodationNeeded: boolean;
  };
  documents?: {
    identityCard?: string;
    photo?: string;
    healthCertificate?: string;
  };
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
}