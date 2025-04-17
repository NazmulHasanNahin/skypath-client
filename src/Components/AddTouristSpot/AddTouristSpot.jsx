import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
const AddTouristSpot = () => {
  const [formData, setFormData] = useState({
    image: '',
    tourists_spot_name: '',
    country_Name: '',
    location: '',
    short_description: '',
    average_cost: '',
    seasonality: '',
    travel_time: '',
    totalVisitorsPerYear: '',
    userEmail: '',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <Helmet><title>Add Tourist Spot</title></Helmet>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Add Tourist Spot</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
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
              value={formData.tourists_spot_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter spot name"
              required
            />
          </div>

          {/* Country Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Country Name</label>
            <input
              type="text"
              name="country_Name"
              value={formData.country_Name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter country name"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
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
              value={formData.short_description}
              onChange={handleChange}
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
              value={formData.average_cost}
              onChange={handleChange}
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
              value={formData.seasonality}
              onChange={handleChange}
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
              value={formData.travel_time}
              onChange={handleChange}
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
              value={formData.totalVisitorsPerYear}
              onChange={handleChange}
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
              value={formData.userEmail}
              onChange={handleChange}
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
              value={formData.userName}
              onChange={handleChange}
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
