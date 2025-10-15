// Baby profile types
export interface Baby {
    id: string;
    name: string;
    birthDate: Date;
    gender: 'male' | 'female';
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Daily log types
  export interface DailyLog {
    id: string;
    babyId: string;
    date: Date;
    mood: 'happy' | 'fussy' | 'sleepy' | 'cranky';
    sleepHours: number;
    feedingNotes: string;
    symptoms: Symptom[];
    generalNotes: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Symptom types
  export interface Symptom {
    type: 'fever' | 'rash' | 'sleep_issues' | 'feeding_problems' | 'other';
    description: string;
    severity: 'mild' | 'moderate' | 'severe';
    duration: string;
    location?: string;
  }
  
  // AI question types
  export interface AIQuestion {
    id: string;
    question: string;
    answer: string;
    category: 'feeding' | 'sleep' | 'development' | 'health' | 'behavior';
    confidence: number;
    sources: Source[];
    createdAt: Date;
  }
  
  export interface Source {
    title: string;
    url: string;
    year: number;
  }
  
  // User types
  export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
  }