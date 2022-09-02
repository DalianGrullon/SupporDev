import AsideCard from "./AsideCard"
import PracticeData from "../data/PracticeData"
const Aside = () => {
    const practice = PracticeData
    return (
        <div className="">
            <aside className="  bg-base-100 h-2/3 items-center overflow-auto absolute" >
                {practice.map((practice) => 
                    <AsideCard key={practice.username} title={practice.request.title} username={practice.username}/>
                )}
                
            </aside>
        </div>
    )
}

export default Aside