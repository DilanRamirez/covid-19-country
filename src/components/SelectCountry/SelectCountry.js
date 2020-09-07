import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { fetchCountriesNames } from "../api/api";
import "./selectCountry.module.css";

const SelectCountry = ({ handleCountryChange }) => {
  //Material UI styles
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  //select State
  const [select, setSelect] = useState("");
  const [country, setCountry] = useState([]);

  //function to handle select change event
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountriesNames());
    };

    fetchAPI();
  }, [setCountry]);

  // console.log(select);

  const onChangeFunctions = (e) => {
    handleCountryChange(e.target.value);
    setSelect(e.target.value);
  };

  return (
    <div className="container">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={(e) => onChangeFunctions(e)}
        >
          <MenuItem value={select}>{select}</MenuItem>
          {country.map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountry;
