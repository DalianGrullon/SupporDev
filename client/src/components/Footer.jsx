import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="bg-gradient-to-br to-slate-400 from-neutral-focus text-neutral-content py-2">
        {/* <h1 className="text-xl text-center font-serif">Socials</h1> */}
        <div className="m-4 text-center md:flex md:justify-around align-middle font-mono">
          <div className="flex items-center">
            <a
              className="py-2"
              href="https://github.com/DalianGrullon"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <SiGithub
                className="hover:text-primary hover:scale-105 duration-300 "
                size={60}
              />
            </a>
            <span className="pl-4 text-xl">Dalian Grullon</span>
          </div>
          <div className="flex items-center">
            <a
              className="py-2"
              href="https://github.com/Mkish1220"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <SiGithub
                className="hover:text-primary hover:scale-105 duration-300"
                size={60}
              />
            </a>
            <span className="pl-4 text-xl">Meaghan Kish</span>
          </div>
          <div className="flex items-center">
            <a
              className="py-2"
              href="https://github.com/RflctnOfU"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <SiGithub
                className="hover:text-primary hover:scale-105 duration-300"
                size={60}
              />
            </a>
            <span className="pl-4 text-xl">Kristofer Marshall</span>
          </div>
          <div className="flex items-center">
            <a
              className="py-2"
              href="https://github.com/Zachary-Maddox"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <SiGithub
                className="hover:text-primary hover:scale-105 duration-300"
                size={60}
              />
            </a>
            <span className="pl-4 text-xl">Zachary Maddox</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
