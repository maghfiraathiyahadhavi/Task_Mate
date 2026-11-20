import PropTypes from "prop-types";
import { Pencil, Trash2, Check, Circle } from "lucide-react";
export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  return <article className={`task-card ${task.completed ? "completed" : ""}`}>
    <button className={`check-task ${task.completed ? "is-done" : ""}`} onClick={() => onToggle(task.id)} aria-label="Ubah status" title={task.completed ? "Tandai belum selesai" : "Tandai selesai"}>
      {task.completed ? <Check size={16}/> : <Circle size={19}/>}
    </button>
    <div className="task-info"><div className="task-title-row"><h3>{task.title}</h3><span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span></div>
      <p>{task.description}</p><div className="task-meta"><span>◷ Dibuat {task.date}</span><span className={task.completed ? "status-done" : "status-pending"}>{task.completed ? "Selesai" : "Dalam proses"}</span></div>
    </div>
    <div className="task-actions"><button onClick={() => onEdit(task)} aria-label="Edit tugas" title="Edit tugas"><Pencil size={17}/></button><button className="delete-action" onClick={() => onDelete(task.id)} aria-label="Hapus tugas" title="Hapus tugas"><Trash2 size={17}/></button></div>
  </article>;
}
TaskCard.propTypes = {
 task: PropTypes.shape({ id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired, priority: PropTypes.string.isRequired, date: PropTypes.string.isRequired }).isRequired,
 onEdit: PropTypes.func.isRequired, onDelete: PropTypes.func.isRequired, onToggle: PropTypes.func.isRequired
};
