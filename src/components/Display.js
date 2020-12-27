import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles({
  root: {
    minWidth: 500
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 8
  },
  display: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default function Display({
  name,
  countryCode,
  temp,
  mintemp,
  maxtemp,
  humidity,
  pressure,
  windSpeed,
  deg
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} variant="h5" component="h1">
          <LocationOnIcon />
          {" " + name},{countryCode}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" component="p">
          Temp: {temp}°C
        </Typography>
        <Box className={classes.display}>
          <Box>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              Humidity:- {humidity}
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              Pressure:- {pressure}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.display}>
          <Box>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              WindSpeed:- {`${windSpeed}`}
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              Degree:-{` ${deg}°`}
            </Typography>
          </Box>
        </Box>
        <Typography className={classes.pos} color="textSecondary" component="p">
          <Box className={classes.display}>
            <Box>Min - MaxTemp:-</Box>
            <Box>
              {mintemp}°C-{maxtemp}°C
            </Box>
          </Box>
        </Typography>
        <Box className={classes.display}>
          <Typography
            className={classes.pos}
            color="textSecondary"
            component="p"
          >
            {new Date().toDateString()}
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            component="p"
          >
            {new Date().toLocaleTimeString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
