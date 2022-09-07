const Requests = ({ request }) => {
  return (
    <div className="card w-full ml-0 bg-base-300 shadow-lg m-4 bg-gradient-to-br from-neutral-focus to-slate-400 text-primary-content duration-300 hover:scale-105">
      <div className="card-body text-primary-content">
        {/* TODO: make this a link to populate the main body of post info */}
        <h3 className="card-title">{request.title}</h3>
        <h4>{request.description}</h4>
      </div>
    </div>
  );
};

export default Requests;
