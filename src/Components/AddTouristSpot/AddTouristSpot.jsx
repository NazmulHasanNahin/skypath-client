import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';



const AddTouristSpot = () => {

  const handleaddTouristSpot = event => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;


    const newSpot = {
      image, tourists_spot_name, country_Name,
      location, short_description, average_cost, seasonality,
      travel_time, totalVisitorsPerYear, userEmail, userName
    };
    console.log(newSpot);

    fetch("http://localhost:5000/add-spots", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newSpot)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          Swal.fire({
            title: "Spot Added Successfully !!",
            icon: "success"
          });
        }
        else {
          Swal.fire({
            title: "Failed to Add Spot!!",
            icon: "error"
          });
        }
      })

  }


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <Helmet><title>Add Tourist Spot</title></Helmet>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Add Tourist Spot</h1>

        <form onSubmit={handleaddTouristSpot}>
          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"

              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Tourist Spot Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tourist Spot Name</label>
            <input
              type="text"
              name="tourists_spot_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter spot name"
              required
            />
          </div>

          {/* Country Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Country Name</label>
            <select
              name="country_Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select a country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>


          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Short Description</label>
            <textarea
              name="short_description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a short description"
              rows="4"
              required
            />
          </div>

          {/* Average Cost */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Average Cost</label>
            <input
              type="number"
              name="average_cost"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter average cost"
              required
            />
          </div>

          {/* Seasonality */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Seasonality</label>
            <select
              name="seasonality"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Seasonality</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
            </select>
          </div>

          {/* Travel Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Travel Time</label>
            <input
              type="text"
              name="travel_time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter travel time"
              required
            />
          </div>

          {/* Total Visitors per Year */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Total Visitors per Year</label>
            <input
              type="number"
              name="totalVisitorsPerYear"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter total visitors per year"
              required
            />
          </div>

          {/* User Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">User Email</label>
            <input
              type="email"
              name="userEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">User Name</label>
            <input
              type="text"
              name="userName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Add Tourist Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
