export default function HeroBanner({ imagesrc }) {
  return (
    <div className="relative bg-[rgba(65,121,74,255)] rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
      
      {/* text */}
      <div className="text-white max-w-md z-10 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
          Pay ₹1/month* for the QPay POS Device
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base">
          One device for accepting all modes of payments
        </p>
        <button className="mt-4 bg-white text-green-700 px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Download App Now!
        </button>
      </div>

      {/* Image hidden on screens below lg */}
      <div className="hidden lg:flex absolute top-0 right-0 h-full w-1/2 overflow-hidden [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]">
        <img
          src={imagesrc}
          alt="POS Illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
