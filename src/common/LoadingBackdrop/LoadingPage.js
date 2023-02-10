import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingPage = ({ open }) => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default LoadingPage;
