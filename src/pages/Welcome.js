import Logo from "./OpenAI_logo.png";
import img from "./img.jpg";
import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="box1">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
            borderRadius: "4px",
            maxWidth: "500px",
            margin: "auto",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100px",
              marginBottom: "16px",
            }}
          />
          <h2>Welcome to ChatGPT</h2>
          <h3>Sign in with your account to continue</h3>
          <div className="btn">
            <div className="btn-1">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Started
              </Button>
            </div>
            <div className="btn-1">
              <Button
                variant="contained"
                color="primary"
                href="https://platform.openai.com/docs/introduction"
              >
                Read Docs
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MyComponent;
