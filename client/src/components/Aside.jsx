import AsideCard from "./AsideCard";
import { QUERY_REQUESTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

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
      {/* <div className="h-3/4"> */}
      <aside className="bg-transparent md:h-3/4 w-full h-44 md:w-60 md:items-center md:overflow-y-auto md:absolute relative flex overflow-x-auto md:block ">
        {requestData.map((request) => (
          <AsideCard key={request._id} request={request} />
        ))}
      </aside>
      {/* </div> */}
    </>
  );
};

export default Aside;
