import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const UpdatePlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch((err) => console.error("Failed to fetch plant:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your plant has been updated.", "success");
          navigate("/myplants");
        } else {
          Swal.fire("No Change", "No changes were made.", "info");
        }
      })
      .catch((err) => {
        console.error("Update failed:", err);
        Swal.fire("Error", "Failed to update the plant.", "error");
      });
  };

  if (!plant) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="bg-[#e6ffe6] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">Update Plant</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Image URL", name: "image", type: "text" },
            { label: "Plant Name", name: "plantName", type: "text" },
            { label: "Description", name: "description", type: "textarea" },
            { label: "Watering Frequency", name: "wateringFrequency", type: "text" },
            { label: "Health Status", name: "healthStatus", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-green-900 font-medium">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={plant[field.name] || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={plant[field.name] || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
                />
              )}
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-green-900 font-medium">Last Watered Date</label>
              <input
                type="date"
                name="lastWateredDate"
                value={plant.lastWateredDate?.split("T")[0] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="block text-green-900 font-medium">Next Watering Date</label>
              <input
                type="date"
                name="nextWateringDate"
                value={plant.nextWateringDate?.split("T")[0] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-green-900 font-medium">Care Level</label>
            <select
              name="careLevel"
              value={plant.careLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
            >
              <option value="">Select care level</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          <div>
            <label className="block text-green-900 font-medium">Category</label>
            <select
              name="category"
              value={plant.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-white"
            >
              <option value="">Select category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
              <option value="Herb">Herb</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md w-full"
          >
            Update Plant
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePlant;
