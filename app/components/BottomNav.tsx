"use client";
import { useState } from "react";
import Link from "next/link";

const BottomMenu = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", link: "/dashboard" },
    { name: "Expenses", link: "/dashboard/expenses" },
    { name: "Add", link: "/dashboard/" },
    { name: "Friends", link: "/dashboard/friends" },
    { name: "Settings", link: "/dashboard/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.link}>
            <button
              onClick={() => setActive(item.name)}
              className={`flex-1 text-center py-2 text-sm font-medium transition-colors duration-200 ${
                active === item.name ? "text-blue-500 border-t-2 border-blue-500" : "text-gray-500"
              }`}
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
