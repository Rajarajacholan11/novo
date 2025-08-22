import React from "react";
import qr from "../assets/qr.png";

export default function QRCodeCard() {
  const tasks = [
    { label: "Receive Payment", completed: false },
    { label: "Order New QRs", completed: false },
    { label: "Download QR", completed: false },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 text-center">
      <div>
        <p className="text-gray-400 text-start text-sm sm:text-base">QR</p>
      </div>

      {/* qr */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 mt-4">

        <img
          src={qr}
          alt="QR Code"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />

        {/* task */}
        <div className="w-full text-left">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Order QR</h3>
          <ul className="space-y-2 list-disc pl-4">
            {tasks.map((task, i) => (
              <li
                key={i}
                className="items-center gap-2 text-gray-600 text-sm sm:text-base"
              >
                <span>{task.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* button */}
      <button className="w-full mt-6 bg-[rgba(65,121,74,255)] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
        View More
      </button>
    </div>
  );
}
