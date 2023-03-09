import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Container, Grid, Box, Button } from "@mui/material";

import { LOGIN_ROUTE } from "utils/consts";
import { auth } from "../index";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== LOGIN_ROUTE) {
      navigate(LOGIN_ROUTE);
    }
  }, []);

  const loginOnClick = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <Box p={5}>
            <Button onClick={loginOnClick} variant={"outlined"}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
