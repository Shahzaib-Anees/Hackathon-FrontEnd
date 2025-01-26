import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./utils/redux/store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./views/Register/Register.jsx";
import Login from "./views/Login/Login.jsx";
import Hero from "./components/Hero/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />

      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
