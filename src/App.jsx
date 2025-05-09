import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AppLayout from "./AppLayout";
import RecipeDetails from "./pages/RecipeDetails";
import { mealLoader } from "./loaders/mealLoader";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/details/:id',
          element: <RecipeDetails/>,
          loader: mealLoader
        }
      ]
    }
  ])

  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
