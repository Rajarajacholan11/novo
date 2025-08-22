// src/components/ProfileProgress.jsx
import React from "react";

export default function ProfileProgress({ percent, tasks }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 text-center w-full">

      <div>
        <p className="text-gray-400 text-start text-sm sm:text-base">PROFILE</p>
      </div>

        {/* progress */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 sm:gap-8 mt-4">

        {/* circular progress bar */}

        <div className="relative w-20 h-20 sm:w-[90px] sm:h-[90px]">
          <svg className="w-full h-full"viewBox="0 0 100 100">
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              viewBox="0 0 100 100"
              r="35"
              cx="50"
              cy="50"
            />
            <circle
              className="text-[rgba(65,121,74,255)]"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={2 * Math.PI * 40 * (1 - percent / 100)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="35"
              cx="50"
              cy="50"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-base sm:text-lg font-bold">
            {percent}%
          </span>
        </div>

        {/* lists */}
        <div className="w-full text-left">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">
            Complete your Profile
          </h3>
          <ul className="space-y-2 list-disc pl-4">
            {tasks.map((task, i) => (
              <li key={i} className="text-gray-600 text-sm sm:text-base">
                <span>{task.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* button */}
      <button className="w-full mt-6 bg-[rgba(65,121,74,255)] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
        Next
      </button>
    </div>
  );
}
