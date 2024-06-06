import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home/*",
  },
  {
    path: "/login",
    element: "",
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/litecase",
});

// import { Navigate, type RouteObject, createBrowserRouter } from 'react-router-dom'

// const routes: RouteObject[] = [
//     {
//       path: "/",
//       element: <Navigate to="/home" />
//     },
//     {
//       path: "/home/*",
//     },
//     {
//       path: "/login",
//       element: ''
//     }
//   ]

//   export const router: ReturnType<typeof createBrowserRouter> =
//     createBrowserRouter(routes, {
//       basename: "/sbt"
//     })
