"use client";
import { useState } from "react";
import Link from "next/link";

const BottomMenu = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { 
      name: "Home", 
      link: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    { 
      name: "Expenses", 
      link: "/dashboard/expenses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M8 12h8M8 8h8M8 16h4"/>
        </svg>
      )
    },
    { 
      name: "Add", 
      link: "/dashboard/expenses/add",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    { 
      name: "Friends", 
      link: "/dashboard/friends",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    { 
      name: "Settings", 
      link: "/dashboard/settings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-base-100 border-t border-base-200 z-50 safe-area-inset-bottom">
      <div className="flex justify-between items-center px-4 py-3">
        {menuItems.map((item, index) => (
          <Link 
            key={item.name} 
            href={item.link} 
            className={`flex-1 ${item.name === "Add" ? "relative" : ""}`}
          >
            <button
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center w-full py-1 transition-colors duration-200
                ${active === item.name ? "text-primary" : "text-base-content/60"}
              `}
            >
              {/* Add Button with Special Positioning */}
              {item.name === "Add" ? (
                <div className="relative -top-6">
                  <div className="bg-primary text-primary-content p-4 rounded-full shadow-lg">
                    <div className="size-4">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Menu Items */
                <div className={`p-2 rounded-lg transition-colors ${
                  active === item.name ? "bg-base-200" : ""
                }`}>
                  <div className="size-4">
                    {item.icon}
                  </div>
                </div>
              )}
              
              {/* Labels for Regular Items */}
              {item.name !== "Add" && (
                <span className="text-xs mt-1 font-medium">
                  {item.name}
                </span>
              )}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;