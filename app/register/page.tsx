import Link from "next/link";

import {registerUser} from '../api-services/authService'
import SubmitButton from "../components/SubmitButton";
const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

          <form action={registerUser} className="space-y-4">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <SubmitButton className="w-full">Sign Up</SubmitButton>
          </form>

          <p className="text-center text-sm mt-2">
            Already have account?
            <Link href="/login" className="link link-primary ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;