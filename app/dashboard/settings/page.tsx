import React from 'react';
import Link from 'next/link';
import LogoutBtn from '@/app/components/logoutBtn';
import { cookies } from 'next/headers';

interface User {
  name: string;
  username: string;
  email: string;
}

const Settings = async () => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get('login-user')?.value;
  const loginUser: User | null = cookieValue ? JSON.parse(cookieValue) : null;

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24 space-y-8">
      <h1 className="text-4xl font-bold text-base-content mb-8">Settings</h1>

      {/* Profile Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Profile</h2>
          {loginUser && (
            <div className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={loginUser.username}
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={loginUser.email}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Appearance Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Appearance</h2>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Theme</span>
              <select className="select select-bordered">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Enable Notifications</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </label>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Account</h2>
          <div className="space-y-4">
            <Link href="/change-password" legacyBehavior>
              <a className="btn btn-outline w-full">Change Password</a>
            </Link>
            <div className="divider"></div>
            <LogoutBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
