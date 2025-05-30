import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    const [myPlants, setMyPlants] = useState([]);

    useEffect(() => {
        if (user?.email) {
          
            fetch(`http://localhost:3000/myplants?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    
                    setMyPlants(data);
                });
        }
    }, [user]);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgba(6,64,43,0.7)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
               
                fetch(`http://localhost:3000/plants/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                       
                        if (data.deletedCount > 0) {
                             Swal.fire("Deleted!", "Your plant has been deleted.", "success");
                            
                              setMyPlants((prev) => 
                                prev.filter((plant) => plant._id !== id));
                           
                        }
                        
                    })
                    .catch((err) => console.error("Delete failed:", err));
            }
        })

    };

    return (
        <div>
            <Navbar />
            <div className="p-6 md:p-12 mx-auto mt-22 bg-[#e6ffe6] dark:bg-[#c7ecc7] font-semibold dark:text-black">
                <h2 className="text-2xl font-semibold mb-4 text-green-900 dark:text-[#0d3c29] text-center">My Plants</h2>

                <div className="max-w-11/12 mx-auto overflow-x-auto">
                    <table className="min-w-full bg-white border border-green-200 rounded-lg shadow">
                        <thead className="bg-green-900 dark:bg-[#0d3c29] text-white">
                            <tr>
                                <th className="px-4 py-3 text-center">Plant Name</th>
                                <th className="px-4 py-3 text-center">Category</th>
                                <th className="px-4 py-3 text-center">Watering Frequency</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPlants.map((plant) => (
                                <tr key={plant._id} className="border-t text-center hover:bg-green-50">
                                    <td className="px-4 py-3 text-[#0d3c29]">{plant.plantName}</td>
                                    <td className="px-4 py-3 text-[#0d3c29]">{plant.category}</td>
                                    <td className="px-4 py-3 text-[#0d3c29]">{plant.wateringFrequency}</td>
                                    <td className="px-4 py-3 flex justify-center gap-4">
                                        <Link to={`/update-plant/${plant._id}`}>
                                            <button className="text-green-700 hover:text-green-900 text-xl" title="Edit">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(plant._id)}
                                            className="text-red-600 hover:text-red-800 text-xl"
                                            title="Delete"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {myPlants.length === 0 && (
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
            <Footer />
        </div>
    );
};

export default MyPlants;
