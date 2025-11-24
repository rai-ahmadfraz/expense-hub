import React from "react";
import Link from "next/link";
import LogoutBtn from "@/app/components/logoutBtn";
import { cookies } from "next/headers";

interface User {
  name: string;
  email: string;
}

const Settings = async () => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("login-user")?.value;
  const loginUser: User | null = cookieValue ? JSON.parse(cookieValue) : null;

  return (
  <div className="min-h-screen bg-base-200 p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* User Info */}
      {loginUser && (
        <div className="bg-base-100 rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold">User Info</h2>
          <p className="text-base-content mt-2">
            <span className="font-semibold">Name:</span> {loginUser.name}
          </p>
          <p className="text-base-content mt-1">
            <span className="font-semibold">Email:</span> {loginUser.email}
          </p>
        </div>
      )}

      {/* Account / Preferences */}
      <div className="bg-base-100 rounded-xl shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Account</h2>
        <div className="border-t border-base-200 mt-2 space-y-2">
          {/* Logout button */}
          <div className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors">
            <LogoutBtn />
          </div>

          {/* Other links */}
          <Link href="/change-password" className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors">Change Password</Link>
          <Link
            href="/notifications"
            className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors"
          >
            Notification Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
