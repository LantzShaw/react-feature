import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";

import ErrorBoundary from "@/comonents/ErrorBoundary";
import { lazy } from "react";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home/*",
    element: <LazyLoad component={lazy(() => import('@/views/Home'))} />,
    // errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    lazy: () => import('@/views/Login'),
    // errorElement: <ErrorBoundary />
  },
  {
    path: "/signup",
    lazy: () => import('@/views/SingUp'),
    // errorElement: <ErrorBoundary />
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
