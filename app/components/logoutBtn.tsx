// 'use client';
import React from 'react'
import { logout } from '../api-services/authService';
const LogoutBtn = () => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default LogoutBtn;
