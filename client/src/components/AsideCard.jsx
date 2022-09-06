const AsideCard = ({ request }) => {
  return (
    <a href={`/project/${request._id}`}>
      <div className="card w-48 bg-base-300 shadow-lg m-4">
        <div className="card-body text-primary">
          {/* TODO: make this a link to populate the main body of post info */}
          <h3 className="card-title">{request.title}</h3>
          <h4>{request.requester.userName}</h4>
        </div>
      </div>
    </a>
  );
};

export default AsideCard;
