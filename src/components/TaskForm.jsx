import { useEffect, useState } from "react";
import { X, Plus, Save } from "lucide-react";
export default function TaskForm({ onSave, editingTask, onCancel }) {
  const [title,setTitle]=useState(""); const [description,setDescription]=useState(""); const [priority,setPriority]=useState("Sedang");
  useEffect(()=>{ if(editingTask){setTitle(editingTask.title);setDescription(editingTask.description);setPriority(editingTask.priority);}else{setTitle("");setDescription("");setPriority("Sedang");}},[editingTask]);
  function handleSubmit(e){e.preventDefault();if(!title.trim()||!description.trim()){alert("Judul dan deskripsi harus diisi.");return;}onSave({title:title.trim(),description:description.trim(),priority});}
  return <form className="task-form" onSubmit={handleSubmit}>
    <div className="form-heading"><div><span className="eyebrow">{editingTask?"PERBARUI CATATAN":"MULAI LANGKAH BARU"}</span><h3>{editingTask?"Edit Tugas":"Tambah Tugas Baru"}</h3></div><button type="button" className="icon-button" onClick={onCancel} aria-label="Tutup"><X size={19}/></button></div>
    <label>Nama tugas<input autoFocus value={title} onChange={e=>setTitle(e.target.value)} placeholder="Contoh: Mengerjakan laporan praktikum"/></label>
    <label>Deskripsi<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Tuliskan detail tugas yang perlu kamu selesaikan..."/></label>
    <label>Prioritas<select value={priority} onChange={e=>setPriority(e.target.value)}><option value="Rendah">Rendah</option><option value="Sedang">Sedang</option><option value="Tinggi">Tinggi</option></select></label>
    <div className="form-buttons"><button className="primary-btn" type="submit">{editingTask?<Save size={17}/>:<Plus size={17}/>} {editingTask?"Simpan Perubahan":"Simpan Tugas"}</button><button type="button" className="secondary-btn" onClick={onCancel}>Batal</button></div>
  </form>;
}
