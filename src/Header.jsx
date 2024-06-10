import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <a href="/posts">Go To Main Menu</a> | <a href="/login">Load Your Character</a> | <Link to="/signup"> Create Your Character </Link> | <LogoutLink className="logOutLink"/>
      <br></br>
      <a href="/posts/new">Create a New Save Game File</a>
    </header>
  );
}
