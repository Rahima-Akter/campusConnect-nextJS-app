import { useEffect, useState } from "react";
import api from "../../utils/api";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Admission() {
  const [colleges, setColleges] = useState([]);
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: "",
  });
  const { user } = useAuth();

  useEffect(() => {
    api.get("/colleges").then(res => setColleges(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post("/admissions", {
      ...form,
      collegeId: selected,
      userId: user.uid,
    });
    alert("Admission submitted!");
  };

  return (
    <div>
      <Navbar />
      <h1>Admission</h1>
      <select onChange={e => setSelected(e.target.value)}>
        <option value="">Select College</option>
        {colleges.map(c => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>
      {selected && (
        <form onSubmit={handleSubmit}>
          <input placeholder="Candidate Name" onChange={e => setForm(f => ({ ...f, candidateName: e.target.value }))} />
          <input placeholder="Subject" onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
          <input placeholder="Email" onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <input placeholder="Phone" onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          <input placeholder="Address" onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
          <input placeholder="Date of Birth" onChange={e => setForm(f => ({ ...f, dob: e.target.value }))} />
          <input placeholder="Image URL" onChange={e => setForm(f => ({ ...f, image: e.target.value }))} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
} 