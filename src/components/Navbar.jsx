import { CheckSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return <header className="navbar">
    <Link to="/dashboard" className="brand"><span className="brand-icon"><CheckSquare size={22}/></span><span>TaskMate<small>PERSONAL TASK MANAGER</small></span></Link>
    <div className="nav-right"><span className="online-dot"/> Stay productive <Sparkles size={16}/></div>
  </header>;
}
