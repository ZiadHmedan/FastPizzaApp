import { Link } from "react-router-dom";
import Search from "./Search";
import UserName from "../UserName";
import styled from "styled-components";
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export default function Header() {
  return (
    <HeaderStyled className="header">
      {
        <Link to="/">
          <h1 className="header--primary">FAST REACT PIZZA CO.</h1>
        </Link>
      }
      <Search />
      <UserName />
    </HeaderStyled>
  );
}
