import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import CartOverview from "../pages/cart/CartOverview";

export default function AppLayouts() {
  return (
    <div>
      <Header />
      <Outlet />
      <CartOverview />
    </div>
  );
}
