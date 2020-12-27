import { Box } from "@material-ui/core";
import React from "react";
import "./../styles.css";
import Display from "./Display";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 style={{ textAlign: "center", color: "white" }}>Loading...</h2>;
  }
  if (posts.length === 0) {
    return (
      <h4
        style={{
          textAlign: "center",
          color: "red",
          backgroundColor: "white",
          border: "2px solid gray"
        }}
      >
        No City Found Matching Your Result
      </h4>
    );
  }

  return (
    <Box
      display="flex"
      m={2}
      p={2}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {posts.map((post) => (
        <Box m={2}>
          <Display
            key={post.id}
            name={post.name}
            countryCode={post.countryCode}
            temp={post.temp}
            mintemp={post.min}
            maxtemp={post.max}
            humidity={post.humidity}
            pressure={post.pressure}
            windSpeed={post.wind.speed}
            deg={post.wind.deg}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Posts;
