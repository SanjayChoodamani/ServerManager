import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Servers from "./pages/Servers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/servers',
    element: <Servers />
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
