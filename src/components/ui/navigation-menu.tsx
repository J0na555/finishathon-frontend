import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <ul className="flex gap-4 p-4 container mx-auto">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hackathons">Hackathons</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/participants">Participants</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/register">Register/Login</Link></li>
        <li><Link to="/submit">Submit</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;