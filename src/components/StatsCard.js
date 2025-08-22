
export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center flex-1">
      <h2 className="text-2xl font-bold text-[rgba(65,121,74,255)] ">{value}</h2>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}
