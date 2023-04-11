import React from "react";
import {
  BsClouds,
  BsCloudSleet,
  BsFillCloudsFill,
  BsFillCloudHaze2Fill,
  BsCloudSun,
} from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";

export default function Icons({ datas }) {
  const icon = datas.weather.map((item) => {
    switch (item.description) {
      case "broken clouds":
        return (
          <div key={item.id}>
            <BsClouds className="mx-3" />
            {item.description}
          </div>
        );

      case "light rain":
        return (
          <div key={item.id}>
            <FaCloudShowersHeavy className="mx-3" />
            {item.description}
          </div>
        );

      case "overcast clouds":
        return (
          <div key={item.id}>
            <BsFillCloudsFill className="mx-3" />
            {item.description}
          </div>
        );

      case "scattered clouds":
        return (
          <div key={item.id}>
            <BsCloudSleet className="mx-3" />
            {item.description}
          </div>
        );

      case "few clouds":
        return (
          <div key={item.id}>
            <TiCloudStorageOutline className="mx-3" />
            {item.description}
          </div>
        );

      case "haze":
        return (
          <div key={item.id}>
            <BsFillCloudHaze2Fill className="mx-3" />
            {item.description}
          </div>
        );

      case "clear sky":
        return (
          <div key={item.id}>
            <BsCloudSun className="mx-3" />
            {item.description}
          </div>
        );

      default:
        return item.description;
    }
  });
  return <div>{icon}</div>;
}
