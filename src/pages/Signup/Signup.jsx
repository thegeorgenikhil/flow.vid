import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../context";

export const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { userName, email, password, confirmPassword } = formData;
  const isFormFullyFilled = userName && email && password && confirmPassword;
  const { signupHandler, isLoading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupHandler({ userName, email, password });
  };
  return (
    <section className="auth-section">
      <h1 className="auth-heading">Signup</h1>
      <form action="">
        <div className="input-group">
          <label htmlFor="user-name">Name</label>
          <input
            id="user-name"
            type="text"
            name="userName"
            value={userName}
            required
            onChange={handleChange}
            placeholder="Eg. Richard Henricks"
          />
        </div>
        <div className="input-group">
          <label htmlFor="user-email">Email Address</label>
          <input
            id="user-email"
            type={"email"}
            name="email"
            value={email}
            required
            onChange={handleChange}
            placeholder="Eg. richardhenrick@piedpiper.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="passowrd">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            autoComplete="new-password"
            placeholder="Enter Password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="user-email">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            required
            autoComplete="new-password"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <button
            disabled={!isFormFullyFilled}
            onClick={handleSubmit}
            className="btn btn-block btn-lg"
          >
            {isLoading ? <Loader /> : "Signup"}
          </button>
          <p className="text-center">
            Already have an account? Login{" "}
            <Link to={"/signin"}>
              <button className="link-btn">here</button>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

