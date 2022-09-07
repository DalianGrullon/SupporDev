import { useState } from "react";
import Auth from "../utils/auth";
import { ADD_DEVELOPER, ADD_REQUESTER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [addRequester] = useMutation(ADD_REQUESTER);
  const [addDeveloper] = useMutation(ADD_DEVELOPER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userFormData.role === "requester") {
      const mutationResponse = await addRequester({
        variables: {
          userName: userFormData.userName,
          firstName: userFormData.firstName,
          lastName: userFormData.lastName,
          email: userFormData.email,
          password: userFormData.password,
          role: userFormData.role,
        },
      });
      const token = mutationResponse.data.addRequester.token;
      Auth.login(token);
    }
    if (userFormData.role === "developer") {
      const mutationResponse = await addDeveloper({
        variables: {
          userName: userFormData.userName,
          firstName: userFormData.firstName,
          lastName: userFormData.lastName,
          email: userFormData.email,
          password: userFormData.password,
          role: userFormData.role,
        },
      });
      const token = mutationResponse.data.addDeveloper.token;
      Auth.login(token);
    }

    setUserFormData({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-gradient-to-br from-neutral-focus to-slate-400 max-w-md md:col-start-6 md:col-span-6 col-start-3 col-span-8 my-12 md:w-1/3">
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
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              name="firstName"
              type="firstName"
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="firstName"
              placeholder="First name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="lastName"
              type="lastName"
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="lastName"
              placeholder="Last name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            name="email"
            type="email"
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email"
            placeholder="Email address"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-6">
          <input
            name="userName"
            type="userName"
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="userName"
            placeholder="User Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-6">
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="password"
            placeholder="******"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group form-check text-center mb-6"></div>
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
      rounded-lg
      shadow-md
      hover:bg-blue-700 hover:scale-105 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-300
      ease-in-out"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
