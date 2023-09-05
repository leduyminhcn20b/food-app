import ChiefCard from "./ChiefsCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },

    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                {chiefs.map(chief => <ChiefCard key = {chief.name} chief ={chief} />) }
            </div>
        </div>
    )
}