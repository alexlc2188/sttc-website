'use client';

import React from 'react';
import { weeklyTimetable } from '@/app/data/timetable';

const hours = Array.from({ length: 28 }, (_, i) => {
  const h = 8 + Math.floor(i / 2);
  const m = i % 2 === 0 ? '00' : '30';
  return `${h.toString().padStart(2, '0')}:${m}`;
});

const sessionColors: Record<string, string> = {
  'high-performance': 'bg-red-500 text-white',
  junior: 'bg-yellow-400 text-white',
  legends: 'bg-purple-600 text-white',
  private: 'bg-blue-400 text-white',
  social: 'bg-green-500 text-white',
  hire: 'bg-gray-400 text-white',
};

function timeToIndex(time: string) {
  const [h, m] = time.split(':').map(Number);
  return (h - 8) * 2 + (m === 30 ? 1 : 0);
}

export default function WeeklyTimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <main className="bg-white text-zinc-800 min-h-screen pt-36 pb-12 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-zinc-800 mb-8 sm:mb-12">
        Weekly Timetable
      </h1>

      <div className="overflow-x-auto">
        <div
          className="grid border border-zinc-300 text-[9px] sm:text-[10px] min-w-[900px]"
          style={{
            gridTemplateColumns: '60px repeat(7, 1fr)',
          }}
        >
          {/* Header Row */}
          <div className="bg-zinc-100"></div>
          {days.map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-zinc-800 py-1.5 sm:py-2 border-b border-l border-zinc-300 bg-zinc-100"
            >
              {day}
            </div>
          ))}

          {/* Time rows */}
          {hours.map((hour) => (
            <React.Fragment key={hour}>
              {/* Time label */}
              <div className="text-[9px] text-zinc-800 border-b border-r border-zinc-300 h-12 sm:h-14 flex items-center justify-end pr-1">
                {hour}
              </div>

              {/* Session cells */}
              {days.map((day) => {
                const sessions = (weeklyTimetable[day] || []).filter((s) => {
                  const start = timeToIndex(s.start);
                  const end = timeToIndex(s.end);
                  const idx = timeToIndex(hour);
                  return idx >= start && idx < end;
                });

                return (
                  <div
                    key={`${day}-${hour}`}
                    className="border-b border-r border-zinc-200 h-12 sm:h-14 px-0.5 py-0.5"
                  >
                    <div className="flex gap-0.5 h-full overflow-hidden">
                      {sessions.map((s, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded px-0.5 py-0.5 text-[9px] font-medium text-center leading-snug break-words ${sessionColors[s.type]}`}
                        >
                          {s.name}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
