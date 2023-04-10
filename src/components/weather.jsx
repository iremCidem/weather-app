import React, { useState } from "react";
import {
  BsClouds,
  BsCloudSleet,
  BsFillCloudsFill,
  BsFillCloudHaze2Fill,
  BsCloudSun,
} from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { TiCloudStorageOutline } from "react-icons/ti";

export default function Weather({ getData }) {
  const boxClasses = "col border py-5  fs-2 text-light fw-semibold";
  const [cityName, setCityName] = useState();
  const [weatherDatas, setWeatherDatas] = useState();
  function handleSearchClick(e) {
    e.preventDefault();

    getData(cityName).then((results) => {
      setWeatherDatas(results);
      setCityName("");
    });
  }
  // const formik = useFormik({
  //   initialValues: {
  //     cityName: "",
  //   },
  //   onSubmit: (values) => {},
  // });
  const Change = (e) => {
    setCityName(e.target.value);
  };
  const data =
    weatherDatas &&
    weatherDatas.weather.map((item) => {
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
  return (
    <div>
      <div className="bg">
        <div className="container-sm text-center ">
          <h1 className="pt-5 text-light">Weather Condition</h1>
          <form className="position-absolute top-50 start-50 translate-middle">
            <label className="form-label fs-4 text-light fw-bolder">
              City Name
            </label>
            <input
              className="form-control  "
              type="text"
              value={cityName}
              name="cityName"
              onChange={Change}
            />
            <button
              className="btn btn-secondary btn-lg mt-2 border"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </form>

          <div className="back">
            {weatherDatas && (
              <div className="row fixed-bottom">
                <div className={boxClasses}>
                  {Math.floor(weatherDatas.main.temp)}°C
                </div>
                <div className={boxClasses}>{data}</div>
                <div className={boxClasses}>{weatherDatas.name}</div>
                <div className={boxClasses}>
                  {new Date(weatherDatas.dt * 1000).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
