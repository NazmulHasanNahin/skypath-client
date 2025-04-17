import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GridLoader, PacmanLoader } from "react-spinners";

const CountrySpots = () => {
    const { name } = useParams();
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/spots/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setSpots(data);
                setLoading(false);
            });
    }, [name]);

    return (
        <div className="px-4 md:px-12 lg:px-20 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Tourist Spots in {name}
            </h2>

            {/* Loading state */}
            {loading && (
                <div className="flex justify-center items-center h-[50vh]">
                    <GridLoader />
                </div>
            )}


            {/* Spots grid */}
            {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {spots.length === 0 ? (
                        <p className="text-center text-xl text-red-500 font-semibold mt-10">
                            No tourist spots found for {name}
                        </p>
                    ) : (
                        spots.map((spot) => (
                            <div
                                key={spot._id}
                                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <h3 className="text-xl font-semibold">{spot.tourists_spot_name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{spot.location}</p>
                                <p className="text-sm">{spot.short_description}</p>
                                <p className="text-sm mt-1 font-medium">
                                    Cost: ${spot.average_cost}
                                </p>
                                <p className="text-sm">Season: {spot.seasonality}</p>
                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default CountrySpots;
