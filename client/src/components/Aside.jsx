import AsideCard from "./AsideCard"
import PracticeData from "../data/PracticeData"
const Aside = () => {
    const practice = PracticeData
    return (
        <div className="">
            <aside className="bg-base-100 md:h-2/3 md:items-center md:overflow-y-auto md:absolute" >
                {practice.map((practice) => 
                    <AsideCard key={practice.username} title={practice.request.title} username={practice.username}/>
                )}
                
            </aside>
        </div>
    )
}

export default Aside