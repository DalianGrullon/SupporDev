import AsideCard from "./AsideCard";
// import PracticeData from "../data/PracticeData";
import { QUERY_REQUESTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Aside = () => {
  // const requests = PracticeData;
  const { loading, error, data } = useQuery(QUERY_REQUESTS);
  const requestData = data?.requests || {};
  console.log(requestData);
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      {/* <div className="h-3/4"> */}
      {/* my changes to aside take away scroll bar */}
      {/* <div className="h-3/4 overflow-y-auto"> */}
      <aside className="w-full justify-between items-center md:flex-row flex-col sm:mb-16">
        {requestData.map((request) => (
          <AsideCard key={request._id} request={request} />
        ))}
      </aside>
      {/* </div> */}
    </>
  );
};

export default Aside;
