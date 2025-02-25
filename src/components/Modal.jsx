import React, { useEffect } from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsModalOpen]);

  // Close modal on clicking outside content
  const handleOverlayClick = (event) => {
    if (event.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50"
    >
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white relative animate-fadeIn transform scale-100 transition-all duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl transition"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
