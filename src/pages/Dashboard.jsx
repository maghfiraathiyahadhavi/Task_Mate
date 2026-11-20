import { useNavigate } from "react-router-dom";
import { ListTodo, CheckCircle2, Clock3, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar"; import Sidebar from "../components/Sidebar"; import TaskCard from "../components/TaskCard";
export default function Dashboard({tasks,onEdit,onDelete,onToggle}) {
 const navigate=useNavigate(); const completed=tasks.filter(t=>t.completed).length; const pending=tasks.length-completed; const progress=tasks.length?Math.round(completed/tasks.length*100):0;
 const today=new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
 return <><Navbar/><div className="main-layout"><Sidebar/><main className="content">
  <div className="welcome"><div><span className="eyebrow">OVERVIEW · {today.toUpperCase()}</span><h1>Good day! <span className="wave">✦</span></h1><p>Pelan-pelan saja, satu tugas selesai adalah sebuah kemajuan.</p></div><button className="primary-btn" onClick={()=>navigate("/tasks")}><Plus size={18}/> Buat Tugas</button></div>
  <section className="stats">
   <div className="stat-card stat-purple"><div className="stat-top"><span>Total Tugas</span><span className="stat-icon"><ListTodo size={19}/></span></div><h2>{tasks.length}</h2><small>Semua tugasmu</small></div>
   <div className="stat-card stat-green"><div className="stat-top"><span>Tugas Selesai</span><span className="stat-icon"><CheckCircle2 size={19}/></span></div><h2>{completed}</h2><small>Kerja bagus, teruskan!</small></div>
   <div className="stat-card stat-orange"><div className="stat-top"><span>Belum Selesai</span><span className="stat-icon"><Clock3 size={19}/></span></div><h2>{pending}</h2><small>Siap untuk dikerjakan</small></div>
  </section>
  <section className="progress-panel"><div className="progress-copy"><div><span className="eyebrow">YOUR PROGRESS</span><h3>Terus jaga momentum!</h3><p>Kamu sudah menyelesaikan {completed} dari {tasks.length} tugas.</p></div><strong>{progress}%</strong></div><div className="progress-track"><span style={{width:`${progress}%`}}/></div></section>
  <div className="section-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h2>Daftar Tugas</h2></div><button className="text-link" onClick={()=>navigate("/tasks")}>Lihat semua <ArrowUpRight size={16}/></button></div>
  <div className="task-list">{tasks.length?tasks.slice(0,4).map(task=><TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle}/>):<div className="empty-state"><Sparkles size={28}/><h3>Belum ada tugas</h3><p>Tambahkan tugas pertamamu dan mulai jadi lebih produktif.</p><button className="primary-btn" onClick={()=>navigate("/tasks")}><Plus size={17}/> Tambah Tugas</button></div>}</div>
 </main></div></>;
}
