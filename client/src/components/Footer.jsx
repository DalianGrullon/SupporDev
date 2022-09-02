import { SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div id="Contact">
            <div className="bg-neutral text-neutral-content py-2">
                {/* <h1 className="text-xl text-center font-serif">Socials</h1> */}
                <div className="m-4 text-center flex justify-around font-mono ">
                    <div className="flex items-center">
                     <a href="https://github.com/DalianGrullon" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub className="hover:text-base-200 hover:scale-105 duration-300 " size={60} />
                    </a>
                    <span className="pl-4 text-xl">Dalian Grullon</span>
                    </div>
                    <div className="flex items-center">
                    <a href="https://github.com/Mkish1220" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub className="hover:text-base-200 hover:scale-105 duration-300" size={60} />
                    </a>
                    <span className="pl-4 text-xl">Meaghan Kish</span>
                    </div>
                    <div className="flex items-center">
                    <a href="https://github.com/RflctnOfU" target='_blank' rel="noreferrer" >
                        {" "}
                        <SiGithub className="hover:text-base-200 hover:scale-105 duration-300" size={60} />
                    </a>
                    <span className="pl-4 text-xl">Kristofer Marshall</span>
                    </div>
                    <div className="flex items-center">
                    <a href="https://github.com/Zachary-Maddox" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub className="hover:text-base-200 hover:scale-105 duration-300" size={60} />
                    </a>
                    <span className="pl-4 text-xl">Zachary Maddox</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;