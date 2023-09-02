import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Main() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('');
  const [sortedJsonObject, setSortedJsonObject] = useState([]);
  useEffect(() => {
    axios.get("https://restaurant-api.dicoding.dev/list").then((res) => {
      // setData = res.data.restaurants
      setData(res.data.restaurants);
      setLoading(false);
      console.log(data);
    });
  }, []);
  const handleSort = () => {
    const sortedRateList = data;
    if (sort === "Ascending") {
      sortedRateList.sort(function (a, b) {
        return a.rating - b.rating;
      });
    } else if (sort === "Descending") {
      sortedRateList.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }

    setSortedJsonObject(sortedRateList);
    setData(sortedRateList);
    console.log(sortedJsonObject);
  };

  return (
    <div className="p-20">
      <p className="text-6xl">Restaurants</p>
      <p className="mt-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className="my-7 flex items-center gap-x-4">
        <p>Filter By: </p>
        <div>
          <select onChange={(e) => (setSort(e.target.value), handleSort())} className="p-2">
            <option disabled selected value="">
              Rating
            </option>
            <option value="Ascending">Tertinggi</option>
            <option value="Descending">Terendah</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-4xl">All Restaurants</p>
        <div className="mt-7 grid grid-cols-4 place-items-center gap-y-5">
          {loading ? (
            <p>Loading</p>
          ) : (
            data.map((item) => {
              return (
                <div key={item.id}>
                  <Card
                    name={item.name}
                    picId={item.pictureId}
                    id={item.id}
                    rate={item.rating}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
