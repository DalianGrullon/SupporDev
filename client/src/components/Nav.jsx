

const Nav = () => {
    return (
        <div className="flex">
            <a href="#" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Home</a>
            <a href="/login" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Login</a>
            <a href="#" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Request</a>
            <a href="#" className="no-underline text-2xl pl-2 hover:text-base-300 duration-300">Signup</a>
        </div>
    )
}

export default Nav