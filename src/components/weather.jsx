import React, { useState } from "react";
import { useFormik } from "formik";

import Icons from "./icons";

export default function Weather({ getData }) {
  const boxClasses = "col border py-5  fs-2 text-light fw-semibold";
  const [weatherDatas, setWeatherDatas] = useState();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      cityName: "",
    },
    onSubmit: (values) => {
      getData(values.cityName).then((results) => {
        setWeatherDatas(results);
        values.cityName = "";
      });
    },
  });

  return (
    <div>
      <div className="bg">
        <div className="container-sm text-center ">
          <h1 className="pt-5 text-light">Weather Condition App</h1>
          <form
            onSubmit={handleSubmit}
            className="position-absolute top-50 start-50 translate-middle"
          >
            <label
              htmlFor="name"
              className="form-label fs-4 text-light fw-bolder"
            >
              City Name
            </label>
            <input
              className="form-control  "
              id="name"
              name="cityName"
              type="text"
              onChange={handleChange}
              value={values.cityName}
            />
            <button
              type="submit"
              className="btn btn-secondary btn-lg mt-2 border"
            >
              Submit
            </button>
          </form>

          <div className="back">
            {weatherDatas && (
              <div className="row fixed-bottom">
                <div className={boxClasses}>
                  {Math.floor(weatherDatas.main.temp)}°C
                </div>
                <div className={boxClasses}>
                  <Icons datas={weatherDatas} />
                </div>
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
