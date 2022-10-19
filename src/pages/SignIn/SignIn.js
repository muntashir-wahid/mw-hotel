import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const signInFormSubmitHandler = (event) => {
    event.preventDefault();

    // Get Form value

    const signInForm = event.target;
    const email = signInForm.email.value;
    const password = signInForm.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign In!</h1>
        </div>
        <div className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={signInFormSubmitHandler} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <button type="button" className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signin
              </button>
            </div>
          </form>
          <p>
            New to MW Hotel?
            <Link to="/signup" className="btn btn-link p-0">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
