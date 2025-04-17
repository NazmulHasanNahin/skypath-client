// const touristData = [
//     {
//       id: 1,
//       name: "Cox's Bazar",
//       location: "Chattogram, Bangladesh",
//       cost: "$120 avg",
//       season: "Best in Winter",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
//     },
//     {
//       id: 2,
//       name: "Sajek Valley",
//       location: "Rangamati, Bangladesh",
//       cost: "$90 avg",
//       season: "Best in Monsoon",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"

//     },
//     {
//       id: 3,
//       name: "Saint Martin’s Island",
//       location: "Bay of Bengal",
//       cost: "$150 avg",
//       season: "Best in Winter",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"

//     },
//     {
//       id: 4,
//       name: "Nilgiri",
//       location: "Bandarban, Bangladesh",
//       cost: "$80 avg",
//       season: "Best in Autumn",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"

//     },
//     {
//       id: 5,
//       name: "Jaflong",
//       location: "Sylhet, Bangladesh",
//       cost: "$70 avg",
//       season: "Best in Spring",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"

//     },
//     {
//       id: 6,
//       name: "Kuakata",
//       location: "Patuakhali, Bangladesh",
//       cost: "$100 avg",
//       season: "Best in Summer",
//       image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"

//     }
//   ]

const TouristSpots = ({ allcountry }) => {
  console.log(allcountry);
  return (
    <div className="px-4 md:px-12 lg:px-20 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8  text-center">Top Tourist Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allcountry.map((spot) => (
          <div
            key={spot._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <img
              src={spot.image}
              alt={spot.country_name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{spot.country_name}</h1>
              <p className="text-sm text-gray-600 line-clamp-3">
                {spot.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TouristSpots
