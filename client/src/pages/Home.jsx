import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-primary bg-gradient-to-br from-neutral-focus to-slate-400 col-span-8 col-start-4 row-span-4 rounded-xl row-start-2 mx-auto md:w-1/3 w-3/4">
      <div className="card w-auto bg-gradient-to-br from-neutral-focus to-slate-400 text-neutral-content shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Welcome to SupporDev!</h2>
          <p className="text-xl">
            Do you need web development work done and are unable to afford a
            complete solution? Are you a developer who needs to hone your skills
            with real world experience? If so, SupporDev is the place for you!
          </p>
          <div className="card-actions justify-end">
            <Link to="/signup">
              <button className="btn bg-gradient-to-br from-blue-900 to-blue-400 text-primary-content hover:bg-primary-focus duration-300 ease-in-out border-none rounded-lg text-lg">
                Get Started!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
