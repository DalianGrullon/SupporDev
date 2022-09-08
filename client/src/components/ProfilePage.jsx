import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_REQUESTER } from "../utils/queries";
import Requests from "./Requests";

const ProfilePage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_REQUESTER, {
    variables: { id: id },
  });

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  const { requester } = data;

  return (
    <>
      {requester.requests.length === 0 ? (
        <>
          <div className="bg-gradient-to-br from-neutral-focus to-slate-400 rounded-xl flex items-center shadow-lg">
            <p className="font-mono text-2xl text-primary-content p-5">
              You have no requests!
            </p>
          </div>
        </>
      ) : (
        <>
          <section className="block p-6 rounded-lg bg-transparent from-neutral-focus to-slate-400 max-w-md md:col-start-6 md:col-span-6 col-start-3 col-span-8 my-8 mx-auto row-start-2 row-span-4 md:w-1/3">
            {requester.requests.map((request) => (
              <Requests key={request._id} request={request} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default ProfilePage;
