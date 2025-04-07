import React from "react";

const CustomBtn = ({ title }) => {
    return (
        <button className="bg-[#EDA415] hover:bg-[#d49213] text-white text-base sm:text-lg font-bold px-6 py-2 rounded-full shadow-lg transition duration-300">
            {title}
        </button>
    );
};

export default CustomBtn;
