import React from "react";
import SlideShow from "../../layout/Header/SlideShow";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="bg-neutral-900 text-white p-1 mt-[-1px]">
      <Typography variant="h6" mt={1} mb={1}  sx={{textAlign:"center"}}>Sắp ra mắt</Typography>
      <SlideShow />
    </div>
  );
};

export default Home;
