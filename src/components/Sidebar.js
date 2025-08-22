import { NavLink } from "react-router-dom";
import { Home, QrCode, Clock, User } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/qr", label: "QR", icon: <QrCode size={20} /> },
    { to: "/history", label: "History", icon: <Clock size={20} /> },
    { to: "/profile", label: "Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="bg-[rgba(65,121,74,255)] text-white w-60 min-h-screen p-6 flex flex-col gap-6">
      
      <div className="text-2xl font-bold">QPay</div>

      {/* links */}
      <nav className="flex flex-col gap-4">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition ${
                isActive
                  ? "bg-[rgb(80,155,92)] font-semibold"
                  : "hover:bg-[rgb(80,155,92)]"
              }`
            }
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
