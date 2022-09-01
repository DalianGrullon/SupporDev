import ProjectCardHeader from "../components/ProjectCardHeader";
const Home = () => {
    return (

        <div className="text-4xl text-primary bg-base-100 w-3/4 mx-auto">
            <div className="card w-auto bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Welcome to SupporDev!</h2>
                    <p >Do you need web development work done and are unable to afford a complete solution? Are you a developer who needs to hone your skills with real world experience? If so, SupporDev is the place for you!</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Get Started!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
