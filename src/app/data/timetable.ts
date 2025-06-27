export type Session = {
  name: string;
  type: 'high-performance' | 'junior' | 'legends' | 'private' | 'social' | 'hire';
  start: string; // format: 'HH:MM'
  end: string;
};

export const weeklyTimetable: Record<string, Session[]> = {
  Monday: [
    { name: 'High Performance Group Training', type: 'high-performance', start: '18:30', end: '20:30' },
    { name: 'Private Coaching', type: 'private', start: '16:00', end: '21:00' },
    { name: 'Table Hire', type: 'hire', start: '16:00', end: '21:00' },
  ],
  Tuesday: [
    { name: 'High Performance Group Training', type: 'high-performance', start: '18:30', end: '20:30' },
    { name: 'Social Play', type: 'social', start: '18:30', end: '21:00' },
  ],
  Wednesday: [
    { name: 'Private Coaching', type: 'private', start: '17:00', end: '19:00' },
    { name: 'Social Play', type: 'social', start: '18:00', end: '21:00' },
    { name: 'Table Hire', type: 'hire', start: '10:00', end: '16:00' },
  ],
  Thursday: [
    { name: 'High Performance Group Training', type: 'high-performance', start: '18:30', end: '20:30' },
    { name: 'Private Coaching', type: 'private', start: '18:30', end: '19:30' },
  ],
  Friday: [
    { name: 'High Performance Group Training', type: 'high-performance', start: '18:30', end: '20:30' },
    { name: 'Social Play', type: 'social', start: '19:00', end: '21:00' },
    { name: 'Table Hire', type: 'hire', start: '17:30', end: '20:00' },
  ],
  Saturday: [
    { name: 'Junior Group Training', type: 'junior', start: '14:00', end: '16:30' },
    { name: 'STTC Legends', type: 'legends', start: '17:00', end: '21:00' },
    { name: 'Table Hire', type: 'hire', start: '10:00', end: '13:00' },
  ],
  Sunday: [
    { name: 'Junior Group Training', type: 'junior', start: '14:00', end: '16:00' },
    { name: 'Private Coaching', type: 'private', start: '12:30', end: '13:30' },
    { name: 'Social Play', type: 'social', start: '15:30', end: '18:00' },
  ],
};
