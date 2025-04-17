import { Link } from "react-router-dom";


const CountryName = ({ allcountry }) => {
  console.log(allcountry);
  return (
    <div className="px-4 md:px-12 lg:px-20 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8  text-center">Top Tourist Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allcountry.map((spot) => (
          <Link to={`/country/${spot.country_name}`}>
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
          </Link>
        ))}

      </div>
    </div>
  )
}

export default CountryName
