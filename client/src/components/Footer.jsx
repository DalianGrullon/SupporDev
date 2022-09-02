import { SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div id="Contact">
            <div className="FooterContainer bg-gradient-to-br from-neutral to-slate-500 text-neutral-content  pb-2">
                <h1 className="text-xl text-center font-serif">Socials</h1>
                <div className="m-4 text-center flex justify-center space-x-2">
                    <a href="https://github.com/DalianGrullon" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/Mkish1220" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/RflctnOfU" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/Zachary-Maddox" target='_blank' rel="noreferrer">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;