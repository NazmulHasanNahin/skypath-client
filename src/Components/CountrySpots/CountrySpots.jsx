import { Link, useParams } from "react-router-dom";
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

            {loading && (
                <div className="flex justify-center items-center h-[50vh]">
                    <GridLoader />
                </div>
            )}


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
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                      <img
                        src={spot.image}
                        alt={spot.tourists_spot_name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-5">
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                          {spot.tourists_spot_name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          📍 {spot.location}, {spot.country_Name}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {spot.short_description}
                        </p>
              
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-sm font-medium text-green-600">
                            Season: {spot.seasonality}
                          </span>
                          <Link to={`/spot/${spot._id}`} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 text-sm">
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
        </div>
    );
};

export default CountrySpots;
