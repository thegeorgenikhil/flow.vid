import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../context";
import "./Signin.css";

export const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const isFormFullyFilled = email && password;
  const { signinHandler, isLoading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinHandler({ email, password });
  };

  const handleGuestUser = async (e) => {
    e.preventDefault();
    setFormData({ email: "test@gmail.com", password: "test123" });
  };

  return (
    <div className="auth-section">
      <h1 className="auth-heading">Sign In</h1>
      <form action="">
        <div className="input-group">
          <label htmlFor="user-email">Email Address</label>
          <input
            id="user-email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Eg. richardhenrick@piedpiper.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
            autoComplete="new-password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <button
            disabled={!isFormFullyFilled}
            onClick={handleSubmit}
            className="btn btn-block btn-lg"
          >
            {isLoading ? <Loader /> : "Sign In"}
          </button>
          <button onClick={handleGuestUser} className="btn btn-block btn-lg">
            Login As Guest
          </button>
          <p className="text-center">
            Don't have an account? Sign up{" "}
            <Link to={"/signup"}>
              <button className="link-btn">here</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

