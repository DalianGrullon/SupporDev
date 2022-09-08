import { Link } from "react-router-dom";

const AsideCard = ({ request }) => {
  return (
    <Link to={`/project/${request._id}`}>
      <div className="card w-48 bg-base-300 shadow-lg m-4 bg-gradient-to-br from-neutral-focus to-slate-400 text-primary-content duration-300 hover:scale-105 hover:shadow-xl">
        <div className="card-body text-primary-content">
          <h3 className="card-title">{request.title}</h3>
          <h4>{request.requester.userName}</h4>
        </div>
      </div>
    </Link>
  );
};

export default AsideCard;
