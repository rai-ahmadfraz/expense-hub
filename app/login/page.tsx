import Link from 'next/link';
import {login} from '../api-services/authService'
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          <form action={login} className="space-y-4">

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

            <button type="submit" className="btn btn-primary w-full">Login</button>

          </form>

          <p className="text-center text-sm mt-2">
            Don't have an account?
            <Link href="/register" className="link link-primary ml-1">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;