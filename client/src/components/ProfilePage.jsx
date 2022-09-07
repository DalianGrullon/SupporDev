import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FaUserCircle } from "react-icons/fa";
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
      <section className="block p-6 rounded-lg shadow-lg bg-gradient-to-br from-neutral-focus to-slate-400 max-w-md md:col-start-6 md:col-span-6 col-start-3 col-span-8 my-8 mx-auto row-start-2 row-span-4">
        {requester.requests.map((request) => (
          <Requests key={request._id} request={request} />
        ))}
      </section>
    </>
  );
};

export default ProfilePage;
