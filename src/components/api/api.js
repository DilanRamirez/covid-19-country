import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const flafUrl = "https://restcountries.eu/rest/v2/name";

export const globalData = async () => {
  const data = await axios.get(url);
  return data.data;
};

export const fetchCountriesNames = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // console.log(countries);
    return countries.map((country) => country.name);
  } catch (error) {}
};

export const fetchCountryData = async (select) => {
  if (select) {
    const countryUrl = `${url}/countries/${select}`;
    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(countryUrl);

      const parseData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
      };
      return parseData;
    } catch (error) {
      console.log(error);
    }
  }
};

export const getFlag = async (country) => {
  try {
    const response = await axios.get(`${flafUrl}/${country}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
