import AsideCard from "./AsideCard";
import { QUERY_REQUESTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
// renders aside
const Aside = () => {
  const { loading, error, data } = useQuery(QUERY_REQUESTS);
  const requestData = data?.requests || {};

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <aside className="bg-transparent md:h-3/4 w-full h-44 md:w-60 md:items-center md:overflow-y-auto md:absolute relative flex overflow-x-auto md:block ">
        <div className="card bg-gradient-to-br from-indigo-900 to-blue-500 w-auto mx-2 my-4 sticky shadow-xl">
          <h2 className="text-primary-content text-center py-3 text-2xl font-mono">
            Requests for development work
          </h2>
        </div>
        {requestData.map((request) => (
          <AsideCard key={request._id} request={request} />
        ))}
      </aside>
    </>
  );
};

export default Aside;
