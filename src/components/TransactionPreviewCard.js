import React from "react";
import { ChevronRight } from "lucide-react";

export default function TransactionPreviewCard({ title, balance, transactions, buttonText }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-xs sm:text-sm font-semibold uppercase text-gray-500">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg sm:text-xl font-bold">₹{balance}</p>
          <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* transactions preview */}
      <div className="flex-1">
        <ul className="max-h-40 overflow-y-auto pr-1">
          {transactions.map((txn, i) => (
            <li
              key={i}
              className="kflex justify-between py-2 text-sm sm:text-base border-b border-gray-300 last:border-b-0"
            >
              <div>
                <p className="font-bold text-base sm:text-lg">{txn.name}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{txn.date}</p>
              </div>
              <span className="font-semibold text-[rgba(65,121,74,255)]">+₹{txn.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* button */}
      <button className="mt-4 w-full bg-[rgba(65,121,74,255)] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition">
        {buttonText}
      </button>
    </div>
  );
}
