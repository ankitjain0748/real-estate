import { useState } from "react";
import Listing from "../Apis/Listing";
import toast from "react-hot-toast";
import { MdAdd, MdEdit } from "react-icons/md";

function AddTeam({ item, fetchTeamList }) {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // In AddTeam.jsx
    // Close modal
    const closeModal = () => {
        setShowModal(false);
    };

    const [formData, setFormData] = useState({
        name: item?.name || "",
        position: item?.position || "",
        imageUrl: "",
        _id: item?._id
    });


    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const main = new Listing();
            let response;

            if (item?._id) {
                // Edit existing team member
                response = await main.Editeam({
                    _id: item._id, // Make sure you pass ID
                    name: formData.name,
                    position: formData.position,
                    imageUrl: formData.imageUrl,
                });
            } else {
                // Add new team member
                response = await main.AddTeam({
                    name: formData.name,
                    position: formData.position,
                    imageUrl: formData.imageUrl,
                });
            }
            console.log("Success:", response);
            toast.success(response.data.message);
            fetchTeamList(); // Refresh list // Close modal after submit
            closeModal();
            setFormData({ name: "", position: "", imageUrl: "" });
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                {item?._id ? <MdEdit /> : <MdAdd />}
            </button>
            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">Add Team Member</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1  gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                    required
                                />
                                <input
                                    type="text"
                                    name="position"
                                    placeholder="Position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                    required
                                />
                                <input
                                    type="text"
                                    name="imageUrl"
                                    placeholder="Image URL"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                {loading ? "Processing..." : "Team Member"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddTeam;
