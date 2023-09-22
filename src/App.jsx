import { RouterProvider, createBrowserRouter } from "react-router-dom";

import '/src/App.css'
import SharedLayOut from "./components/sharedLayOut";
import Dashbord from "./pages/dashbord";
import Signin from "./pages/signin";
import Forcast from "./pages/forcast";


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        { path: "dashbord", element: <Dashbord/> },

        { path: "Signin", element: <Signin/> },

        { path: "Forcast", element: <Forcast/> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />

      
    </>
  );
}

export default App;
