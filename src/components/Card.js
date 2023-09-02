import React, { useEffect, useState } from "react";
import StarRating from "./Rating";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiFoodTag } from "react-icons/bi";

export default function Card(props) {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try{
        axios
        .get(`https://restaurant-api.dicoding.dev/detail/${props.id}`)
        .then((res) => {
          setCategory(res.data.restaurant.categories);
          setLoading(false);
          console.log(category);
        });
    }
    catch(exception){
        alert(exception)
    }
    
  }, []);
  return (
    <>
      <div className="w-[400px] h-[450px] flex flex-col justify-between">
        <div>
          <img
            src={`https://restaurant-api.dicoding.dev/images/small/${props.picId}`}
            className="h-[300px] bg-cover"
          />
          {/* <div className="bg-black h-[300px] w-full"></div> */}
          <div className="ml-3">
            <p className="text-xl font-bold">{props.name}</p>
            <div className="flex items-center gap-x-3">
              <StarRating rating={props.rate} /> <span>({props.rate})</span>
            </div>
            <div className="flex items-center gap-x-1 mt-3">
              <BiFoodTag />
              {loading ? (
                <p>....</p>
              ) : (
                category.map((item) => {
                  return <span>{item.name} </span>;
                })
              )}
            </div>
          </div>
        </div>
        <button
          className="bg-[#002B56] p-2 text-white font-bold"
          onClick={() => navigate(`/detail/${props.id}`)}
        >
          LEARN MORE
        </button>
      </div>
    </>
  );
}
