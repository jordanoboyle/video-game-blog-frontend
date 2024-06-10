import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <a href="#">Go To Main Menu</a> | <a href="#posts-index">Load Game Files</a> | <a href="#posts-new">Start New Game</a> | <Link to="/signup"> Create UserName </Link>
    </header>
  );
}
