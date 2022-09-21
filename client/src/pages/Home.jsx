import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Home = () => {
  const checkRole = () => {
    if (Auth.loggedIn()) {
      const checkToken = Auth.getProfile();
      return checkToken.data.role;
    }
  };

  return (
    <div className="text-primary bg-gradient-to-br from-neutral-focus to-slate-400 col-span-8 col-start-4 row-span-4 rounded-xl row-start-2 mx-auto md:w-1/3 w-3/4">
      <div className="card w-auto bg-gradient-to-br from-neutral-focus to-slate-400 text-neutral-content shadow-2xl">
        <div className="card-body">
          {Auth.loggedIn() ? (
            <>
              {checkRole() === "requester" ? (
                <>
                  <h2 className="card-title text-4xl">
                    Hello {`${Auth.getProfile().data.userName}`}
                  </h2>
                  <p className="text-xl">
                    Make a request for help and have your needs fulfilled!!
                  </p>
                </>
              ) : (
                <>
                  <h2 className="card-title text-4xl">
                    Hello {`${Auth.getProfile().data.userName}`}
                  </h2>
                  <p className="text-xl">
                    Find a request that you can help with and acquire the
                    experience that you need!
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <h2 className="card-title text-4xl">Welcome to SupporDev!</h2>
              <p className="text-xl">
                Do you need web development work done and are unable to afford a
                complete solution? Are you a developer who needs to hone your
                skills with real world experience? If so, SupporDev is the place
                for you!
              </p>
              <Link to="/signup">
                <button className="btn bg-gradient-to-br shadow-lg hover:scale-105 from-blue-900 to-blue-400 text-primary-content hover:bg-primary-focus duration-300 ease-in-out border-none rounded-lg text-lg">
                  Get Started!
                </button>
              </Link>
            </>
          )}
          <div className="card-actions justify-end">
            {Auth.loggedIn() && checkRole() === "requester" ? (
              <Link to="/request">
                <button className="btn bg-gradient-to-br shadow-lg hover:scale-105 from-blue-900 to-blue-500 text-primary-content hover:bg-primary-focus duration-300 ease-in-out border-none rounded-lg text-lg">
                  Make a Request
                </button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
