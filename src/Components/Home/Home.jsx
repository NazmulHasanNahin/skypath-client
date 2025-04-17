import { useLoaderData } from "react-router-dom";
import Nav from "../Shared/Nav";
import Banner from "./Banner";
import TouristSpots from "./TouristSpots";

const Home = () => {
    const allcountry = useLoaderData();
    // console.log(allcountry);
    return (
        <div>
            <Banner></Banner>
            <TouristSpots
            allcountry={allcountry}
            ></TouristSpots>
            
        </div>
    );
};

export default Home;