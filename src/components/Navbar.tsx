import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { LOGIN_ROUTE } from "utils/consts";
import { auth } from "index";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={signOut} color="error" variant="outlined">
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button color="error" variant="outlined">
                Логин
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
