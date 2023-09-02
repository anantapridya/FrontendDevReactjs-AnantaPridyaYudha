import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const width = rating * 20
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex relative">
          <FaRegStar aria-hidden="true"  />
          <FaRegStar aria-hidden="true" />
          <FaRegStar aria-hidden="true" />
          <FaRegStar aria-hidden="true" />
          <FaRegStar aria-hidden="true" />
          <div
            className="h-full flex absolute overflow-hidden"
            style={{width: `${width}%`}}
          >
            <div className="flex">
              <FaStar aria-hidden="true" color="#002B56" />
              <FaStar aria-hidden="true" color="#002B56" />
              <FaStar aria-hidden="true" color="#002B56" />
              <FaStar aria-hidden="true" color="#002B56" />
              <FaStar aria-hidden="true" color="#002B56" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
