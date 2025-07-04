import React from "react";

const SekeletonTaskList = () => {
  return (
    <>
      <div className="w-full">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-[#28df99] animate-pulse"
          >
            {/* Left side: Checkbox + Text */}
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 bg-[#28df99] rounded"></div>
              <div className="w-64 h-4 bg-[#28df99] rounded"></div>
            </div>

            {/* Right side: Edit + Delete buttons */}
            <div className="flex gap-3">
              <div className="w-16 h-8 bg-[#28df99] rounded"></div>
              <div className="w-16 h-8 bg-[#28df99] rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SekeletonTaskList;
