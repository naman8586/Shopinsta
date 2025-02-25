import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const handleSave = () => {
    if (newAddress.trim()) {
      setAddress(newAddress);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
        <h3 className="text-2xl font-semibold text-red-500 mb-4">Change Address</h3>

        {/* Address Input */}
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()} // Save on Enter key press
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none transition"
          placeholder="Enter new address..."
        />

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-red-500 text-black font-bold hover:bg-red-400 rounded-lg transition"
            disabled={!newAddress.trim()} // Disable button if input is empty
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;
