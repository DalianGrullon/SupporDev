import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { DEVELOPER_LOGIN, REQUESTER_LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loginRequester] = useMutation(REQUESTER_LOGIN);
  const [loginDeveloper] = useMutation(DEVELOPER_LOGIN);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // try {
    if (loginData.role === "requester") {
      const loginMutation = await loginRequester({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      const token = loginMutation.data.requesterLogin.token;
      Auth.login(token);
    }
    if (loginData.role === "developer") {
      const loginMutation = await loginDeveloper({
        variables: {
          email: loginData.email,
          password: loginData.password,
        },
      });
      const token = loginMutation.data.developerLogin.token;
      Auth.login(token);
    }

    setLoginData({
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-base-300 max-w-md md:col-start-6 md:col-span-4  my-12">
      <form className="form" onSubmit={handleFormSubmit}>
        <select
          className="form-select bg-base-100 rounded-lg mb-6 w-full"
          name="role"
          id="role"
          defaultValue="choose"
          onChange={handleInputChange}
        >
          <option value="choose" disabled>
            Choose account type
          </option>
          <option name="developer" value="developer">
            Developer
          </option>
          <option name="requester" value="requester">
            Requester
          </option>
        </select>
        <div className="form-group mb-6">
          <label
            htmlFor="email"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-base-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
            id="email"
            placeholder="Email address"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-base-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
            id="password"
            placeholder="******"
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleFormSubmit}
          className="
      w-full
      px-6
      py-2.5
      bg-primary
      text-primary-content
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary-focus hover:shadow-lg
      focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-emerald-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign in
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Not a member?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-primary-focus focus:text-emerald-700 transition duration-200 ease-in-out"
          >
            Sign Up!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
