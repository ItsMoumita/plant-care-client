import React, { useContext} from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const AddPlantForm = () => {

const {user} = useContext(AuthContext);
const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());
   
    delete newPlant.userName;
    delete newPlant.userEmail;
    newPlant.email = user?.email;
    newPlant.userName = user?.displayName || "Anonymous";
   
    fetch('https://plant-care-server-gamma.vercel.app/plants', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => {
     
        if (data.insertedId) {
           Swal.fire({
            title: "Success!",
            text: "New plant added successfully!",
            icon: "success",
            background: "white/70",
            color: "rgba(6,64,43,0.7)",
            confirmButtonColor: "rgba(6,64,43,0.7)",
          });
            form.reset();
        } else {
             Swal.fire({
              title: "Error!",
              text: "Failed to add plant. Please try again.",
              icon: "error",
              background: "white/70",
              color: "rgba(6,64,43,0.7)",
              confirmButtonColor: "rgba(6,64,43,0.7)",
            });
        }
    })

}

// const Home = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//   }, []);
// }

  return (
      <div className="bg-[#e6ffe6]">
        <Helmet>
          <title>Plant Care | AddPlants</title>
        </Helmet>
        <Navbar></Navbar>

  <div className="max-w-5xl mx-auto p-8  bg-[#e6ffe6] shadow-lg mt-22 ">
      <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">Add a New Plant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-green-900 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            // value={formData.image}
            // onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-green-900 font-medium">Plant Name</label>
          <input
            type="text"
            name="plantName"
            // value={formData.plantName}
            // onChange={handleChange}
            placeholder="Enter plant name"
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-green-900 font-medium">Category</label>
          <select
            name="category"
            // value={formData.category}
            // onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] text-white"
            required
          >
            <option value="">Select category</option>
            <option value="Succulent">Succulent</option>
            <option value="Fern">Fern</option>
            <option value="Flowering">Flowering</option>
            <option value="Herb">Herb</option>
          </select>
        </div>

        <div>
          <label className="block text-green-900 font-medium">Description</label>
          <textarea
            name="description"
            // value={formData.description}
            // onChange={handleChange}
            placeholder="Enter a short description"
            rows="2"
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-green-900 font-medium">Care Level</label>
          <select
            name="careLevel"
            // value={formData.careLevel}
            // onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] text-white"
            required
          >
            <option value="">Select care level</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>

        <div>
          <label className="block text-green-900 font-medium">Watering Frequency</label>
          <input
            type="text"
            name="wateringFrequency"
            // value={formData.wateringFrequency}
            // onChange={handleChange}
            placeholder="Enter watering frequency (e.g., weekly)"
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-green-900 font-medium">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
            //   value={formData.lastWateredDate}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)]"
              required
            />
          </div>
          <div>
            <label className="block text-green-900 font-medium">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
            //   value={formData.nextWateringDate}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)]"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-green-900 font-medium">Health Status</label>
          <input
            type="text"
            name="healthStatus"
            // value={formData.healthStatus}
            // onChange={handleChange}
            placeholder="Healthy / Needs Attention"
            className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-green-900 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            />
          </div>
          <div>
            <label className="block text-green-900 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 border border-green-300 rounded-md bg-[rgba(6,64,43,0.7)] placeholder:text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[rgba(6,64,43,0.7)] hover:bg-[rgba(6,64,43,0.6)] text-white font-semibold py-2 px-6 rounded-md w-full mt-4"
        >
          Add Plant
        </button>
      </form>
    </div>
        <Footer></Footer>
      </div>
  );
};

export default AddPlantForm;
