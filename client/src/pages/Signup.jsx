import { useState } from "react";
import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";
// import { useMutation } from "@apollo/client";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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

    //     setUserFormData({
    //       username: "",
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       password: "",
    //       role: "",
    //     });
  };

  return (
    <div className="text-primary bg-base-100 col-span-3 col-start-6 row-span-4 row-start-1 mx-auto">
      <form className="rounded-lg" noValidate validated={validated}>
        <label htmlFor="type">Choose your type of account</label>
        <select className="form-select rounded-lg" name="role" id="role">
          <option value="none" disabled hidden selected>
            Choose account type
          </option>
          <option name="developer" value={userFormData.role}>
            Developer
          </option>
          <option name="requester" value={userFormData.role}>
            Requester
          </option>
        </select>

        <label htmlFor="username">Username</label>
        <input
          className="form-input rounded-lg"
          type="text"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-input rounded-lg"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-input rounded-lg"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          className="form-input rounded-lg"
          type="text"
          name="email"
          placeholder="email@email.com"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-input rounded-lg"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Signup;
