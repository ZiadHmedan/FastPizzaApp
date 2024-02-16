import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/ui/Error";

import AppLayouts from "./components/AppLayouts";
import Menu from "./pages/menu/Menu";
import NewOrder from "./pages/order/NewOrder";
import OrderDetails from "./pages/order/OrderDetails";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayouts />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Menu />,
        path: "/menu",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <NewOrder />,
        path: "/order/new",
      },
      {
        element: <OrderDetails />,
        path: "/order/:orderId",
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;
