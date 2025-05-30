// components/PlantDetail.jsx
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const PlantDetail = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
const {  user } = useContext(AuthContext);
  useEffect(() => {
   
    fetch(`https://plant-care-server-42t1fwv8n-itsmoumitas-projects.vercel.app/plants`)
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p._id === id);
        if (foundPlant) {
          setPlant(foundPlant);
        } else {
          console.error("Plant not found for ID:", id);
        }
      });
  }, [id]);

  if (!plant) return <div className="p-6">Loading...</div>;

  return (
    // console.log("Plant data:", plant.nextWateringDate);
    <div>
      <Navbar></Navbar>
      <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 mt-22">
        <img src={plant.image} alt={plant.plantName} className="w-full h-64 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{plant.plantName}</h2>
        <p className="text-gray-600 mb-1"><strong>Category:</strong> {plant.category}</p>
        <p className="text-gray-600 mb-1"><strong>Description:</strong> {plant.description}</p>
        <p className="text-gray-600 mb-1"><strong>Care Level:</strong> {plant.careLevel}</p>
        <p className="text-gray-600 mb-1"><strong>Watering:</strong> {plant.wateringFrequency}</p>
        <p className="text-gray-600 mb-1"><strong>Last Watered:</strong> {typeof plant.lastWateredDate}</p>
        <p className="text-gray-600 mb-1"><strong>Next Watering:</strong> {plant.nextWateringDate}</p>
        <p className="text-gray-600 mb-1"><strong>Health:</strong> {plant.healthStatus}</p>
        {
          plant.email ?(
            <p className="text-gray-600 mt-4"><strong>Owner:</strong>{plant.userName}</p>
          ): (
            <p className="text-gray-600 mt-4"><strong>Owner:</strong>Owner not found</p>
          )
        }
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default PlantDetail;
