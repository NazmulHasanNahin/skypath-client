// SpotDetails.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";

const SpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <GridLoader />
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 lg:px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">{spot.tourists_spot_name}</h2>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-lg mb-4">{spot.short_description}</p>
            <p className="text-md text-gray-600">Location: {spot.location}</p>
            <p className="text-md text-gray-600">Seasonality: {spot.seasonality}</p>
            <p className="text-md text-gray-600">Average Cost: ${spot.average_cost}</p>
            <p className="text-md text-gray-600">Best Time to Visit: {spot.travel_time}</p>
            <p className="text-md text-gray-600">Total Visitors Per Year: {spot.totalVisitorsPerYear}</p>
            <p className="text-md text-gray-600">Contact: {spot.userName} ({spot.userEmail})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
