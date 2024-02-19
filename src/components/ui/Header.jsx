import { Link } from "react-router-dom";
import Search from "./Search";
import UserName from "../UserName";

export default function Header() {
  return (
    <div>
      {
        <Link to="/">
          <h1 className="header--primary">FAST REACT PIZZA CO.</h1>
        </Link>
      }
      <Search />
      <UserName />
    </div>
  );
}
