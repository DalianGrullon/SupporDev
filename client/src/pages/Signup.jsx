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
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
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

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }

    // try {
    //     const {data} = await addUser({variables: { ...userFormData}});

    // } catch (err) {
    //     console.error(err);
    //     setShowAlert(true)
    // }

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
    // <div className="text-primary bg-base-100 col-span-3 col-start-6 row-span-4 row-start-1 mx-auto">
    //   <form className="rounded-lg" noValidate validated={validated}>
    // <label htmlFor="type">Choose your type of account</label>
    // <select className="form-select rounded-lg" name="role" id="role">
    //   <option value="none" disabled hidden selected>
    //     Choose account type
    //   </option>
    //   <option name="developer" value={userFormData.role}>
    //     Developer
    //   </option>
    //   <option name="requester" value={userFormData.role}>
    //     Requester
    //   </option>
    // </select>

    //     <label htmlFor="username">Username</label>
    //     <input
    //       className="form-input rounded-lg"
    //       type="text"
    //       name="username"
    //       placeholder="username"
    //       onChange={handleInputChange}
    //     />
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       className="form-input rounded-lg"
    //       type="text"
    //       name="firstName"
    //       placeholder="First Name"
    //       onChange={handleInputChange}
    //     />
    //     <label htmlFor="lastName">Last Name</label>
    //     <input
    //       className="form-input rounded-lg"
    //       type="text"
    //       name="lastName"
    //       placeholder="Last Name"
    //       onChange={handleInputChange}
    //     />
    //     <label htmlFor="email">Email</label>
    //     <input
    //       className="form-input rounded-lg"
    //       type="text"
    //       name="email"
    //       placeholder="email@email.com"
    //       onChange={handleInputChange}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
    //       className="form-input rounded-lg"
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       onChange={handleInputChange}
    //     />
    //   </form>
    // </div>
    <div className="block p-6 rounded-lg shadow-lg bg-base-300 max-w-md col-start-6 col-span-4 ">
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
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
