import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import StarRating from "../components/Rating";

export default function DetailRestaurant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://restaurant-api.dicoding.dev/detail/${id}`)
      .then((res) => {
        setData(res.data.restaurant);
        setLoading(false);
        console.log(res.data.restaurant);
      });
  }, []);
  //   console.log(id);
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="p-10">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-x-3 items-center font-bold text-xl mb-5"
          >
            <BiArrowBack /> Back
          </button>
          <div className="flex gap-x-10">
            <img
              src={`https://restaurant-api.dicoding.dev/images/small/${data.pictureId}`}
              className="h-[500px] bg-cover rounded-2xl"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <p className="text-4xl font-extrabold">{data.name}</p>
                <p className="text-justify mt-7 text-xl">{data.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl flex items-center gap-x-3">
                  <MdLocationOn className="" /> {data.address}, {data.city}
                </p>
                <div className="flex items-center gap-x-4">
                  <span className="text-xl">Rating : </span>
                  <StarRating rating={data.rating} />
                  <span>({data.rating})</span>
                </div>
              </div>
            </div>
          </div>
          <p className="font-bold text-4xl mt-10 mb-5">Menu</p>
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              <p className="text-xl font-semibold mb-3">Foods</p>
              <div className="">
                <ul className="list-disc">
                  {data.menus.foods.map((item) => {
                    return <li className="ml-10 text-lg">{item.name}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold mb-3">Foods</p>
              <div className="">
                <ul className="list-disc">
                  {data.menus.drinks.map((item) => {
                    return <li className="ml-10 text-lg">{item.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-4xl mt-10 mb-5">Reviews</p>
            <div>
              {data.customerReviews.map((item) => {
                return (
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold">From: {item.name}</p>
                      <p>"{item.review}"</p>
                    </div>
                    <p className="font-medium">{item.date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
