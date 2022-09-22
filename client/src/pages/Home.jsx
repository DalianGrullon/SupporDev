import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import PrimaryButton from "../components/shared/button/PrimaryButton";

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
                <PrimaryButton className="text-lg">Get Started!</PrimaryButton>
              </Link>
            </>
          )}
          <div className="card-actions justify-end">
            {Auth.loggedIn() && checkRole() === "requester" ? (
              <Link to="/request">
                <PrimaryButton className="">Make a Request</PrimaryButton>
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
