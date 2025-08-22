// src/pages/History.jsx
import { useState } from "react";
import Layout from "../components/Layout";
import { ListFilter, Search, Timer, Clock, Landmark } from "lucide-react";
import TransactionTable from "../components/TransactionTable";

export default function History() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Layout>
      <div className="mx-auto mt-5 px-4">
        

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Settlement History
          </p>
          <button className="text-base sm:text-lg md:text-xl text-[rgba(65,121,74,255)] border border-[rgba(65,121,74,255)] px-4 py-2 rounded-lg hover:bg-[rgba(65,121,74,0.1)] transition w-full md:w-auto">
            Download Statement
          </button>
        </div>

        {/* Search input */}
        <div className="flex flex-col sm:flex-row gap-2 mt-8 w-full">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-10 border rounded-md border-gray-300 px-12 font-semibold text-base sm:text-lg"
              placeholder="Search"
            />
            <Search
              size={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
          </div>
          <button className="p-2 rounded-md bg-[rgba(65,121,74,255)] text-white hover:bg-green-700 transition self-end sm:self-auto">
            <ListFilter size={24} />
          </button>
        </div>

        {/* info banner */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border rounded-md bg-blue-100 mt-8 p-4">
          <div className="flex gap-2 items-start md:items-center text-gray-600 text-sm sm:text-base">
            <Clock className="text-[rgba(65,121,74,255)] shrink-0" />
            <p>
              Today's total collection will be auto-settled by{" "}
              <span className="text-[rgba(65,121,74,255)] font-semibold">
                08:00AM,
              </span>{" "}
              <span className="text-[rgba(65,121,74,255)] font-semibold">
                23rd Oct'22
              </span>{" "}
              Tomorrow
            </p>
          </div>
          <button
            className="flex gap-2 items-center justify-center text-white bg-[rgba(65,121,74,255)] h-12 w-full md:w-40 p-2 rounded-md hover:bg-green-700 transition"
            onClick={() => setShowPopup(true)}
          >
            <Timer size={20} /> Settle Now
          </button>
        </div>

        {/*  Table */}
        <TransactionTable />

        {/*  Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999] px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full max-h-[90%] overflow-y-auto relative">
              {/* x*/}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                onClick={() => setShowPopup(false)}
              >
                ✕
              </button>

              {/* popup*/}
              <h2 className="text-xl font-bold mb-4">Settlement Summary</h2>

              {/* collection */}
              <div className="flex justify-between text-lg font-semibold mb-2 flex-wrap gap-2">
                <span className="flex gap-2 items-center">
                  <Landmark size={20} className="text-[rgba(65,121,74,255)]" />
                  Today's Total Collection
                </span>
                <span>₹1,023</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-2 flex-wrap gap-2">
                <span>Already Settled</span>
                <span className="font-medium text-green-600">₹100</span>
              </div>

              <hr className="my-4 text-gray-200" />

              {/* calculation */}
              <div className="text-gray-600 space-y-2">
                <p className="text-sm font-thin">SETTLEMENT CALCULATION</p>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Amount yet to be settled</span>
                  <span className="font-medium">IBRAHIM MOHAMEDALI</span>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Past pending amount</span>
                  <span className="font-medium">092141241127</span>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Charges</span>
                  <span className="font-medium">07,Aug 2024</span>
                </div>
              </div>

              <hr className="my-4 text-gray-200" />

              {/* settlement card */}
              <div className="flex justify-between text-lg font-semibold flex-wrap gap-2">
                <span className="flex gap-2 items-center">
                  <Landmark size={20} className="text-[rgba(65,121,74,255)]" />
                  Net Amount to be Settled
                </span>
                <span>₹1023</span>
              </div>

              {/* informations */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
                <div className="bg-green-50 p-3 rounded-md w-full md:w-auto">
                  <p className="text-gray-600 text-sm">
                    Tap <b>‘Settle Now’</b> to instantly get settlements in your
                    bank account.
                  </p>
                  <p className="text-green-800 font-semibold text-sm mt-1">
                    Settle Now is Chargeable
                  </p>
                </div>

                <button className="w-full md:w-[120px] h-[45px] bg-[rgba(65,121,74,255)] text-white rounded-lg hover:bg-green-700 transition">
                  Settle Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
