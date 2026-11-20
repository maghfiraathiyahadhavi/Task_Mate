import { LayoutDashboard, ListTodo, CircleHelp } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return <aside className="sidebar">
    <span className="side-label">MENU UTAMA</span>
    <NavLink to="/dashboard"><LayoutDashboard size={19}/> Dashboard</NavLink>
    <NavLink to="/tasks"><ListTodo size={19}/> My Tasks</NavLink>
    <div className="sidebar-tip"><span className="tip-icon"><CircleHelp size={18}/></span><b>Tips produktif</b><p>Pecah tugas besar menjadi langkah kecil agar lebih mudah diselesaikan.</p></div>
    <div className="sidebar-footer">Made for your better days ✦</div>
  </aside>;
}
