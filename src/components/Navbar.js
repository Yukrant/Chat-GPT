import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();

  //handle logout
  const handleLogout = async () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.primary.main}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <div className="box">
        <div>
          <Typography variant="h1" color="white" fontWeight="bold">
            Chat-GPT
          </Typography>
        </div>
        <div className="items">
          <div>
            {isLogin ? (
              <>
                <NavLink className="aa" to="/" p={1}>
                  Home
                </NavLink>
                <NavLink className="aa" to="/about" p={1}>
                  About
                </NavLink>
                <NavLink
                  className="aa"
                  to="/login"
                  onClick={handleLogout}
                  p={1}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="aa" to="/about" p={1}>
                  About
                </NavLink>
                <NavLink className="aa" to="/register" p={1}>
                  Sign Up
                </NavLink>
                <NavLink className="aa" to="/login" p={1}>
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
