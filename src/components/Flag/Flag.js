import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

export default function Flag({ flagData }) {
  console.log(flagData);
  if (!flagData) {
    return "";
  }
  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid item component={Card} xs={12} md={3}>
          <CardMedia
            style={{ height: 0, paddingTop: "56%" }}
            image={flagData.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography color="h4" gutterBottom>
              {flagData.name}
            </Typography>
            <Typography color="textSecondary" variant="h8">
              Population
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={flagData.population}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{flagData.region}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
