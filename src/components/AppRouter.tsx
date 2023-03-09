import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "utils/consts";
import { Chat } from "./Chat";
import { Login } from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "index";

export const AppRouter: React.FC = () => {
  const [user] = useAuthState(auth);

  const publicRoutes = [
    {
      path: LOGIN_ROUTE,
      component: <Login />,
    },
  ];

  const privateRoutes = [
    {
      path: CHAT_ROUTE,
      component: <Chat />,
    },
  ];

  const publicRoutesComponent = publicRoutes.map(({ path, component }, key) => (
    <Route key={key} path={path} element={component} />
  ));
  const privateRoutesComponent = privateRoutes.map(
    ({ path, component }, key) => (
      <Route key={key} path={path} element={component} />
    )
  );

  return user ? (
    <Routes>
      {privateRoutesComponent}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutesComponent}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};
