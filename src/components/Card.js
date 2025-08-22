export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow 
        p-3 sm:p-4 md:p-6 
        transition hover:shadow-lg 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
