import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    fetch("https://plant-care-server-gamma.vercel.app/plants/newplants")
      .then((res) => res.json())
      .then((data) => {
        setNewPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching new plants:", error);
      });
  }, []);

  return (
    <div className="py-10 bg-green-50 dark:bg-[#c7ecc7]">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-900 dark:text-[#0d3c29]">
        Newly Added Plants
      </h2>

      <Marquee pauseOnHover speed={60} gradient={false}>
        <div className="flex gap-6 px-4">
          {newPlants.map((plant, index) => (
            <div
              key={plant._id}
              className="bg-white shadow-lg rounded-xl p-4 w-64 text-center border border-green-200 dark:bg-[#e8fbe8]"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                {index + 1}. {plant.plantName}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{plant.category}</p>
              <Link to={`/plants/${plant._id}`}>
                <button className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default NewPlants;
