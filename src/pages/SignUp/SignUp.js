import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../store/UserContext";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);

  const signUpFormSubmitHandler = (event) => {
    event.preventDefault();

    // Get Form value

    const signUpForm = event.target;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    const confirmedPassword = signUpForm.confirm.value;
    console.log(email, password, confirmedPassword);

    // Some simple validation

    if (password.trim().length < 6) {
      setError("Your passord should be 6 charecters long at least");
      return;
    }

    if (password !== confirmedPassword) {
      setError("Password did not match.Try again!");
      return;
    }

    // Create new user

    createUser(email, password)
      .then(({ user }) => {
        console.log(user);
        setError("");
        signUpForm.reset();
        navigate("/available-rooms");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign In!</h1>
        </div>
        <div className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={signUpFormSubmitHandler} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Signin
              </button>
            </div>
            {error && <p className="mt-3 text-red-600">{error}</p>}
          </form>

          <div className="flex flex-col w-full">
            <div className="grid place-items-center">
              <p>
                Existing Member of MW Hotel?
                <Link to="/signin" className="btn btn-link p-0">
                  Sign In
                </Link>
              </p>
            </div>
            <div className="divider">Or Sign up with</div>
            <div className="grid  place-items-center">
              <button className="btn btn-outline btn-primary">
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
