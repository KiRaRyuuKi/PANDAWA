"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

type PropsType = {
  id: string;
  label?: string;
  placeholder?: string;
  onChange?: (date: Date | null) => void;
  defaultValue?: Date | null;
};

type MonthData = {
  date: Date;
  days: {
    date: Date;
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
  }[][];
};

export default function DatePicker({
  id,
  label,
  placeholder,
  onChange,
  defaultValue = null,
}: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(defaultValue || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultValue);
  const [displayValue, setDisplayValue] = useState<string>('');
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedDate) {
      // const day = String(selectedDate.getDate()).padStart(2, '0');
      // const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      // const year = selectedDate.getFullYear();
      // const formattedDate = `${day}-${month}-${year}`;
      // setDisplayValue(formattedDate);
      const year = selectedDate.getFullYear();
      const formattedDate = `${year}`;
      setDisplayValue(formattedDate);
    } else {
      setDisplayValue('');
    }
  }, [selectedDate]);

  // Handle clicks outside the calendar to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Generate calendar data for the current month
  const generateMonthData = (date: Date): MonthData => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let days = [];
    let week = [];

    // Add days from previous month
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(prevMonthLastDay);
      day.setDate(prevMonthLastDay.getDate() - i);
      week.push({
        date: day,
        day: day.getDate(),
        isCurrentMonth: false,
        isToday: day.getTime() === today.getTime(),
        isSelected: selectedDate ? day.getTime() === selectedDate.getTime() : false // Fixed: use ternary to ensure boolean
      });
    }

    // Add days from current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(date.getFullYear(), date.getMonth(), i);
      week.push({
        date: day,
        day: i,
        isCurrentMonth: true,
        isToday: day.getTime() === today.getTime(),
        isSelected: selectedDate ? day.getTime() === selectedDate.getTime() : false // Fixed: use ternary to ensure boolean
      });

      if (week.length === 7) {
        days.push(week);
        week = [];
      }
    }

    // Add days from next month to complete the last week
    if (week.length > 0) {
      const daysToAdd = 7 - week.length;
      for (let i = 1; i <= daysToAdd; i++) {
        const day = new Date(date.getFullYear(), date.getMonth() + 1, i);
        week.push({
          date: day,
          day: i,
          isCurrentMonth: false,
          isToday: day.getTime() === today.getTime(),
          isSelected: selectedDate ? day.getTime() === selectedDate.getTime() : false
        });
      }
      days.push(week);
    }

    // Add one more week if we have less than 6 weeks
    if (days.length < 6) {
      let lastDate = days[days.length - 1][6].date;
      let week = [];
      for (let i = 1; i <= 7; i++) {
        const day = new Date(lastDate);
        day.setDate(lastDate.getDate() + i);
        week.push({
          date: day,
          day: day.getDate(),
          isCurrentMonth: false,
          isToday: day.getTime() === today.getTime(),
          isSelected: selectedDate ? day.getTime() === selectedDate.getTime() : false
        });
      }
      days.push(week);
    }

    return {
      date,
      days
    };
  };

  const monthData = generateMonthData(currentMonth);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
    setIsOpen(false);
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative">
      {/* {label && (
        <label
          htmlFor={id}
          className="block ml-0.5 mb-1.5 text-sm font-medium text-gray-700 dark:text-white/80"
        >
          {label}
        </label>
      )} */}
      <div className="relative">
        <input
          id={id}
          type="text"
          placeholder={placeholder || "Select a date"}
          value={displayValue}
          readOnly
          onClick={toggleCalendar}
          className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800 cursor-pointer"
        />
        <span
          className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"
          onClick={toggleCalendar}
        >
          <Image src="/icons/calendar.svg" width={22} height={22} alt="Calendar" />
        </span>
      </div>

      {isOpen && (
        <div
          ref={calendarRef}
          className="absolute z-20 p-4 mt-2.5 bg-white border-[1.5px] rounded-2xl shadow-lg dark:bg-gray-800 min-w-[375px] right-0"
        >
          {/* Calendar header with month navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              type="button"
              onClick={goToPreviousMonth}
              className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div className="text-lg font-medium text-gray-800 dark:text-white">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <button
              type="button"
              onClick={goToNextMonth}
              className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-6">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-sm font-medium text-center text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid gap-1">
            {monthData.days.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2 px-1">
                {week.map((day, dayIndex) => (
                  <button
                    key={dayIndex}
                    type="button"
                    onClick={() => handleDateClick(day.date)}
                    className={`
                      w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center 
                      ${day.isCurrentMonth
                        ? 'text-gray-800 dark:text-white'
                        : 'text-gray-400 dark:text-gray-500'
                      }
                      ${day.isSelected
                        ? 'bg-brand-500 text-white dark:bg-brand-600 border-[1.5px]'
                        : day.isToday
                          ? 'bg-gray-100 dark:bg-gray-700 border-[1.5px]'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}