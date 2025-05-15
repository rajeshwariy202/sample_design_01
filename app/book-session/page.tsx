"use client";

import Footer from "@/components/footer";
import React, { useState } from "react";

export default function BookSessionPage() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Book a Session</h2>

        {/* Responsive Container */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left Side: Dropdowns */}
          <div className="flex-1 space-y-4">
            {/* Year Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Year</label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Month Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Month</label>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.selectedIndex))}
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Side: Calendar */}
          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">
              {months[selectedMonth]} {selectedYear}
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <div key={day} className="text-center font-medium">{day}</div>
              ))}
              {[...Array(getDaysInMonth(selectedYear, selectedMonth))].map((_, i) => (
                <div
                  key={i}
                  className={`text-center p-2 rounded-lg cursor-pointer ${
                    selectedDate === i + 1 ? "bg-blue-500 text-white" : "hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedDate(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Date Display */}
        {selectedDate && (
          <p className="text-center text-lg font-semibold text-blue-600 mt-4">
            Selected Date: {selectedDate} {months[selectedMonth]}, {selectedYear}
          </p>
        )}

        {/* Other Dropdowns */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Timezone</label>
            <select className="w-full p-2 border rounded-md">
              <option>Eastern Time (US & Canada)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <select className="w-full p-2 border rounded-md">
              <option>10 minutes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mode of Consultation</label>
            <select className="w-full p-2 border rounded-md">
              <option>Chat</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Your Appointment Time</label>
            <select className="w-full p-2 border rounded-md">
              <option>1:30 AM</option>
              <option>2:00 AM</option>
              <option>2:30 AM</option>
              <option>3:00 AM</option>
              <option>3:30 AM</option>
              <option>4:00 AM</option>
              <option>4:30 AM</option>
            </select>
          </div>
        </div>

        {/* Book Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 w-full rounded-xl shadow-md transition duration-200">
            Book Session
          </button>
        </div>
      </div>

      {/* Footer */}
           <Footer />
    </>
  );
}
