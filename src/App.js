import React, { useEffect, useState } from "react";
import "./App.css";
import { globalData } from "./components/api/api";
import UncontrolledLottie from "./components/animations/UncontrolledLottie";
import SelectCountry from "./components/SelectCountry/SelectCountry";
import { fetchCountryData, getFlag } from "./components/api/api";
import Header from "./components/Header/Header";
import Flag from "./components/Flag/Flag";
import Footer from "./components/Footer/Footer";
import Card from "./components/Cards/Card";
import ChartData from "./components/Charts/Chart";

function App() {
  const [data, setData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [country, setCountry] = useState("");
  const [flagData, setFlagData] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await globalData());
    };

    fetchAPI();
  }, [setData]);

  const handleCountryChange = async (country) => {
    // fetch data
    // console.log(country);
    setCountry(country);
    const data = await fetchCountryData(country);
    const flagResponse = await getFlag(country);
    // set state
    const flagDataParsed = {
      name: flagResponse[0].name,
      url: flagResponse[0].flag,
      population: flagResponse[0].population,
      region: flagResponse[0].region,
      latLog: flagResponse[0].latlng,
    };
    // console.log(flagResponse);
    setFlagData(flagDataParsed);
    setCountryData(data);
  };

  // console.log(flagData);

  // console.log(countryData);
  return (
    <div className="container">
      <Header />
      <div className="container-top">
        <div className="container-img">
          <UncontrolledLottie />
        </div>
        <div className="container-select">
          <SelectCountry handleCountryChange={handleCountryChange} />
        </div>
        <div className="container-flag">
          <Flag flagData={flagData} />
        </div>
        <div className="container-cards">
          <Card countryData={countryData} />
        </div>
      </div>
      <div className="container-center">
        <div className="chart"></div>
        <ChartData countryData={countryData} country={country} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
