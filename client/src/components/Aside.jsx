import AsideCard from "./AsideCard"

const Aside = () => {
    return (
        <div className="">
            <aside className="float-left w-auto bg-base-100 h-1/2 items-center overflow-y-scroll">
                <AsideCard />
                <AsideCard />
                <AsideCard />
                <AsideCard />
            </aside>
        </div>
    )
}

export default Aside