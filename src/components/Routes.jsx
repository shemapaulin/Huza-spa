import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./homepage";
import MainService from "./MainService";


const definedRoutes = [
  { path: "/", component: <Home /> },
  { path: "/services", component: <MainService /> },
];

const getLevenshteinDistance = (a, b) => {
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
    }
  }

  return matrix[a.length][b.length];
};

const findClosestRoute = (path) => {
  let closestRoute = definedRoutes[0];
  let minDistance = Infinity;

  for (const route of definedRoutes) {
    const distance = getLevenshteinDistance(route.path, path);
    if (distance < minDistance) {
      minDistance = distance;
      closestRoute = route;
    }
  }

  return closestRoute;
};

const MainRoutes = () => {
  const location = useLocation();
  const matchedRoute = definedRoutes.find((route) => route.path === location.pathname);

  if (!matchedRoute) {
    const closestRoute = findClosestRoute(location.pathname);
    return <Navigate to={closestRoute.path} replace />;
  }

  return (
    <Routes key={location.pathname} location={location}>
      {definedRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default MainRoutes;