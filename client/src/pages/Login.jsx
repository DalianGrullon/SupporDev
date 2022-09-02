import React from 'react'

const Login = () => {
    return (
        <div className="form-container">
            <h1>login form</h1>
            <form action="#">
                <div className='control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'id='name' />
                </div>
                <div className='control'>
                <label htmlFor="psw">Password</label>
                <input type="password" name='psw' id='psw' />
                </div>
                <span><input type="checkbox" /> Remember me.</span>
                <div className='control'>
                <input type="submit" value="Login"/>
                </div>
            </form>
            <div className='link'>
            <a href="#">Forgot Password ?</a>
            </div>

        </div>
    )
}

export default Login