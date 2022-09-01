import Nav from './Nav'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <header className="bg-neutral text-neutral-content flex justify-between h-32 items-center ">
                <div className="pl-8 flex items-center">
                    <FaUserCircle size={70} />
                    <h1 className="pl-2 text-4xl font-bold">SupporDev</h1>
                </div>

                <div className="pr-8">
                    <Nav />
                </div>
            </header>




        </>
    )
}

export default Header