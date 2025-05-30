import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plant-care-server-42t1fwv8n-itsmoumitas-projects.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-lg">Loading plants...</div>;

  return (
     <div >
        <Navbar></Navbar>
        <div className="p-6 md:p-12 mx-auto mt-22 bg-[#e6ffe6] dark:bg-[#c7ecc7] font-semibold dark:text-black">
      <h2 className="text-2xl font-semibold mb-4 text-green-900 dark:text-[#0d3c29] text-center">All Plants</h2>

      <div className="max-w-11/12 mx-auto overflow-x-auto">
        <table className="min-w-full bg-white border border-green-200 rounded-lg shadow">
          <thead className="bg-green-900 dark:bg-[#0d3c29] text-white">
            <tr>
              <th className="px-4 py-3 text-center">Plant Name</th>
              <th className="px-4 py-3 text-center">Category</th>
              <th className="px-4 py-3 text-center">Watering Frequency</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant._id} className="border-t text-center hover:bg-green-50">
                <td className="px-4 py-3 text-[#0d3c29]">{plant.plantName}</td>
                <td className="px-4 py-3 text-[#0d3c29]">{plant.category}</td>
                <td className="px-4 py-3 text-[#0d3c29]">{plant.wateringFrequency}</td>
                <td className="px-4 py-3 text-[#0d3c29]">
                  <Link to={`/plants/${plant._id}`}>
                    <button className="bg-green-900 dark:bg-[#0d3c29] text-white px-4 py-1 rounded hover:bg-[#0d3c29]/80">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {plants.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No plants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      <Footer></Footer>
     </div>
  );
};

export default AllPlants;
