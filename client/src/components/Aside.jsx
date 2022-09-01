import AsideCard from "./AsideCard"

const Aside = () => {
    return (
        <div className="overflow-x-auto">
            <aside className="float-left w-auto bg-base-100 items-center">
                <AsideCard />
                <AsideCard />
                <AsideCard />
                <AsideCard />
                <AsideCard />
                <AsideCard />
            </aside>
        </div>
    )
}

export default Aside