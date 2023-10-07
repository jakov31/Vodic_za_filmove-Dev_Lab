import React, { useState, useEffect } from "react";
import ModalWindow from "../UI/ModalWindow";

const Sidebar = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="sidebar">
      <h2 className="text-white text-2xl mb-2">BEST</h2>
      <div className="">
        {data.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-row cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="">
              <img
                className="w-[80px] h-[80px] mb-2"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div>
              <p className="text-white ">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movie={selectedItem}
      />
    </div>
  );
};

export default Sidebar;
