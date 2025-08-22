import { useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp, CircleCheck } from "lucide-react";

export default function QRList() {
  const [activeTab, setActiveTab] = useState("active"); // "active" | "requests"
  const [expanded, setExpanded] = useState(null); // which request row is expanded

  // Active QR data
  const activeQRCodes = [
    {
      id: "Q201946579",
      desc: "All Marketing Sales - MS1903041155331648980231",
      terminal: "Terminal 1",
    },
    {
      id: "Q201946579",
      desc: "All Marketing Sales - MS1903041155331648980231",
      terminal: "Terminal 2",
    },
    {
      id: "Q201946579",
      desc: "All Marketing Sales - MS1903041155331648980231",
      terminal: "Terminal 3",
    },
  ];

  // QR Requests data
  const qrRequests = [
    {
      id: 1,
      title: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      requested: "26.04.2024",
      status: "QR Request Accepted",
    },
    {
      id: 2,
      title: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      requested: "26.04.2024",
      status: "QR Request Accepted",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row mb-4 border border-green-600 rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab("active")}
          className={`flex-1 py-2 text-sm sm:text-base font-semibold ${
            activeTab === "active"
              ? "bg-[rgba(65,121,74,255)] text-white"
              : "bg-white text-green-600"
          }`}
        >
          Active QR Codes
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`flex-1 py-2 text-sm sm:text-base font-semibold ${
            activeTab === "requests"
              ? "bg-[rgba(65,121,74,255)] text-white"
              : "bg-white text-green-600"
          }`}
        >
          QR Code Requests
        </button>
      </div>

      {/* Active QR Codes List */}
      {activeTab === "active" && (
        <div className="flex-1 space-y-3 overflow-y-auto">
          {activeQRCodes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border rounded-lg px-3 py-2 hover:bg-gray-50"
            >
              {/* qr img */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=sample"
                alt="Small QR"
                className="w-16 h-16 sm:w-12 sm:h-12 mb-2 sm:mb-0"
              />

              {/* texts */}
              <div className="flex-1 sm:ml-3 text-center sm:text-left">
                <p className="text-sm font-semibold">{item.id}</p>
                <p className="text-[9px] text-gray-500 truncate md:text-base">{item.desc}</p>
                <p className="text-xs text-gray-400">{item.terminal}</p>
              </div>

              <ChevronRight className="text-gray-400 hidden sm:block" size={18} />
            </div>
          ))}
        </div>
      )}

      {/* QR Code Requests List */}
      {activeTab === "requests" && (
        <div className="flex-1 space-y-4 overflow-y-auto">
          {qrRequests.map((req) => (
            <div key={req.id} className="border border-gray-200 rounded-lg p-3">
              {/* Top Row */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer"
                onClick={() =>
                  setExpanded(expanded === req.id ? null : req.id)
                }
              >
                {/* qr image + text */}
                <div className="flex items-start space-x-3 w-full">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=request"
                    alt="QR Request"
                    className="w-12 h-12"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{req.title}</p>
                    <p className="text-xs text-gray-500">{req.address}</p>
                    <p className="text-xs text-gray-400">
                      Requested on {req.requested}
                    </p>
                  </div>
                </div>

                {/* status row */}
                <div className="w-full sm:w-auto">
                  {expanded === req.id ? (
                    <div className="flex justify-between items-center bg-blue-100 h-8 rounded-md px-2">
                      <p className="flex gap-1 text-[rgba(65,121,74,255)] text-[10px] xl:text-[9px]">
                        <CircleCheck className="text-[rgba(65,121,74,255)] p-1 md:p-0" />
                        QR Request Accepted
                      </p>
                      <ChevronUp className="text-gray-500" />
                    </div>
                  ) : (
                    <div className="flex justify-between items-center bg-blue-100  rounded-md px-2 ">
                      <p className="flex gap-1 text-[rgba(65,121,74,255)] p-1  text-[10px] xl:text-[9px] ">
                        <CircleCheck  className="text-[rgba(65,121,74,255)] p-1 " />
                        QR Request Accepted
                      </p>
                      <ChevronDown className="text-gray-500" />
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Status */}
              {expanded === req.id && (
                <div className="mt-3 bg-green-50 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-gray-500">○ Awaiting Production</p>
                  <p className="text-sm text-gray-500">○ Awaiting Dispatch</p>
                  <p className="text-sm text-gray-500">○ Awaiting Delivery</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button className="mt-4 w-full bg-[rgba(65,121,74,255)] text-white py-2 rounded-lg font-semibold hover:bg-green-700 text-sm sm:text-base">
        Request more QR Codes
      </button>
    </div>
  );
}
