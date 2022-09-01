const Home = () => {
    return (
        <div>
            <div className="Container border-2 border-zinc-800 flex">
                <div className="basis-1/3 flex justify-start items-center">
                <img
                    id="ProfileImage"
                    className="border-2 rounded-full border-zinc-800 w-12"
                    src="logo192.png"
                    alt="Image"
                />
                </div>
                <h2 id="Username" className="basis-1/3 flex justify-center items-center">
                    Username
                </h2>
                <h3 id="Title" className="basis-1/3 flex justify-center items-center">
                    Title
                </h3>
            </div>
        </div>
    );
};

export default Home;
