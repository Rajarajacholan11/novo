import { Clipboard, Download, Share2 } from "lucide-react";

export default function QRPreview() {
  const qrData = "9876543210@qpay";

  return (
    <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 w-full max-w-md mx-auto">
      {/* qr image */}
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`}
        alt="Main QR"
        className="w-40 h-40 sm:w-48 sm:h-48"
      />

      {/* UPI row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
        <p className="text-gray-800 font-semibold text-sm sm:text-base">
          UPI ID: <span className="text-gray-800">{qrData}</span>
        </p>

        <button className="flex items-center space-x-1 text-gray-600 hover:underline text-sm">
          <Clipboard size={16} /> <span>Copy</span>
        </button>
      </div>

      {/* username */}
      <p className="text-gray-500 text-sm sm:text-base">
        Ibrahim Mohammedali
      </p>

      {/* download + share buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 w-full sm:w-auto">
        <button className="flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-sm sm:text-base">
          <Download size={18} className="mr-2" /> Download
        </button>
        <button className="flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-sm sm:text-base">
          <Share2 size={18} className="mr-2" /> Share
        </button>
      </div>
    </div>
  );
}
