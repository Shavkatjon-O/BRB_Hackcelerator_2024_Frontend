"use client";
import React, { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const getDaysInMonth = (month: any, year:any) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: any, year:any) => {
    return new Date(year, month, 1).getDay();
  };

  const getDaysOfPreviousMonth = (month:any, year:any) => {
    const prevMonth = new Date(year, month - 1, 1);
    return getDaysInMonth(prevMonth.getMonth(), prevMonth.getFullYear());
  };

  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  
  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonthIndex, currentYear);

  const prevMonthDays = getDaysOfPreviousMonth(currentMonthIndex, currentYear);
  const daysArray = Array.from({ length: 35 }, (_, i) => {
    let day;
    if (i < firstDay) {
      day = prevMonthDays - firstDay + i + 1;
      return { day, isCurrentMonth: false };
    } else if (i >= firstDay + daysInMonth) {
      day = i - firstDay - daysInMonth + 1;
      return { day, isCurrentMonth: false };
    } else {
      day = i - firstDay + 1;
      return { day, isCurrentMonth: true };
    }
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="px-4 py-2 bg-gray-300 rounded">Previous</button>
        <span className="text-lg font-bold">{currentMonth.toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <button onClick={handleNextMonth} className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>
      <main className="flex-1 overflow-auto">
        <div className="grid grid-cols-7 border-l border-b border-gray-300">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="flex items-center justify-center border-t border-r border-gray-300 h-10 bg-gray-100">
              {day}
            </div>
          ))}
          {daysArray.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center border-t border-r border-gray-300 h-28 ${item.isCurrentMonth ? 'bg-white text-black' : 'bg-gray-100 text-gray-400'}`}
            >
              {item.day}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Calendar;
