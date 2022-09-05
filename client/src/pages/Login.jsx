import React from "react";

const Login = () => {
  return (
    //     <div className="form-container">
    //         <h1>login form</h1>
    //         <form action="#">
    //             <div className='control'>
    //                 <label htmlFor="name">Name</label>
    //                 <input type="text" name='name'id='name' />
    //             </div>
    //             <div className='control'>
    //             <label htmlFor="psw">Password</label>
    //             <input type="password" name='psw' id='psw' />
    //             </div>
    //             <span><input type="checkbox" /> Remember me.</span>
    //             <div className='control'>
    //             <input type="submit" value="Login"/>
    //             </div>
    //         </form>
    //         <div className='link'>
    //         <a href="#">Forgot Password ?</a>
    //         </div>

    //     </div>
    // )
    <div className="block p-6 rounded-lg shadow-lg bg-base-300 max-w-md md:col-start-6 md:col-span-4  mb-24">
      <form>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
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
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
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
            id="exampleInputPassword2"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
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
          <a
            href="/signup"
            className="text-primary hover:text-primary-focus focus:text-emerald-700 transition duration-200 ease-in-out"
          >
            Sign Up!
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
