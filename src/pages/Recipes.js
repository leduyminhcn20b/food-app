import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {

    const recipes = [
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg"
        },
        {
            tile: "Chicken Pan Pizza",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg"
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key = {index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}