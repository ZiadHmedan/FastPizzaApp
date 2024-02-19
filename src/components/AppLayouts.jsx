import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import CartOverview from "../pages/cart/CartOverview";
import styled from "styled-components";

export default function AppLayouts() {
  const BaseLayout = styled.div`
  height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    .header{
      background-color: red;
    }
    :nth-child(2){
      background-color: hotpink;
    }
    .cart-overview{
      background-color: aqua;
    }
   

  `;
  return (
    <BaseLayout c>
      <Header />
      <Outlet />
      <CartOverview />
    </BaseLayout>
  );
}
