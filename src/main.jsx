import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./utils/redux/store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./views/Register/Register.jsx";
import Login from "./views/Login/Login.jsx";
import Hero from "./components/Hero/Hero.jsx";
import LoanForm from "./components/LoanForm/LoanForm.jsx";

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
      },
      {
        path: "/loanForm",
        element: <LoanForm />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
