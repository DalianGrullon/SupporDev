import PracticeData from "../data/PracticeData"


const AsideCard = ({title, username}) => {
  return (
    <div className="card w-48 bg-base-300 shadow-lg m-4">
  <div className="card-body text-primary">
    {/* TODO: make this a link to populate the main body of post info */}
    <h3 className="card-title">{title}</h3>
    <h4>{username}</h4>
  </div>
</div>
  )
}

export default AsideCard