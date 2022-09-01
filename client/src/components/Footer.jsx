import { SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <div id="Contact">
            <div className="FooterContainer bg-neutral text-neutral-content pb-2">
                <h1 className="text-xl text-center font-serif">Socials</h1>
                <div className="m-4 text-center flex justify-center space-x-2">
                    <a href="https://github.com/DalianGrullon">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/Mkish1220">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/RflctnOfU">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                    <a href="https://github.com/Zachary-Maddox">
                        {" "}
                        <SiGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;