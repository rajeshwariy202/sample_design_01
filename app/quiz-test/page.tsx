"use client";
import { useState } from "react";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (question, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [question]: prev[question] === option ? null : option,
    }));
  };
   const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    alert("Your answers have been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-xl font-bold text-center mb-4">
          Quiz 04: Advanced Arithmetic
        </h2>
        <div className="text-center text-gray-600 mb-6">Time Left: 27:24</div>

        {/* Questions Wrapper */}
        <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-6">
          {/* Question 1 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1">
            <p className="font-semibold text-lg mb-3">1. (112 × 54) = ?</p>
            <div className="flex flex-col gap-3">
              {["67000", "70000", "76500", "77200"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q1"] === option}
                    onChange={() => handleSelect("q1", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1 mt-4 lg:mt-0">
            <p className="font-semibold text-lg mb-3">
              2. A 3-digit number 4a3 is added to another 3-digit number 984 to
              give a 4-digit number 13b7, which is divisible by 11. Then, (a +
              b) = ?
            </p>
            <div className="flex flex-col gap-3">
              {["10", "11", "12", "13"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q2"] === option}
                    onChange={() => handleSelect("q2", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-6">
          {/* Question 1 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1 mt-4 lg:mt-0">
            <p className="font-semibold text-lg mb-3">
              3. How many natural numbers are there between 23 and 100 which are
              exactly divisible by 6?
            </p>
            <div className="flex flex-col gap-3">
              {["8", "11", "13", "None of these"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q3"] === option}
                    onChange={() => handleSelect("q3", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 4 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1">
            <p className="font-semibold text-lg mb-3">4. (112 × 54) = ?</p>
            <div className="flex flex-col gap-3">
              {["67000", "70000", "76500", "77200"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q1"] === option}
                    onChange={() => handleSelect("q1", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

          <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-6">
          {/* Question 1 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1">
            <p className="font-semibold text-lg mb-3">1. (112 × 54) = ?</p>
            <div className="flex flex-col gap-3">
              {["67000", "70000", "76500", "77200"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q1"] === option}
                    onChange={() => handleSelect("q1", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 - Vertical Checkbox Layout */}
          <div className="flex flex-col bg-gray-50 p-4 rounded-md flex-1 mt-4 lg:mt-0">
            <p className="font-semibold text-lg mb-3">
              2. A 3-digit number 4a3 is added to another 3-digit number 984 to
              give a 4-digit number 13b7, which is divisible by 11. Then, (a +
              b) = ?
            </p>
            <div className="flex flex-col gap-3">
              {["10", "11", "12", "13"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 bg-white border rounded-md hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-blue-500"
                    checked={selectedAnswers["q2"] === option}
                    onChange={() => handleSelect("q2", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
                <div className="mt-6 text-center">
          <button onClick={handleSubmit} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Submit Answers
          </button>
        </div>
      </div>

    </div>
  );
}
