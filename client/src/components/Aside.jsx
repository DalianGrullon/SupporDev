import AsideCard from "./AsideCard"

const Aside = () => {
    return (
        <>
            <aside className="float-left w-auto bg-base-100 overflow-auto items-center">
                <AsideCard />
                <AsideCard />
                <AsideCard />
            </aside>

        </>
    )
}

export default Aside