import { useEffect, useState } from "react";
import api from "../../utils/api";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (user) {
      api.get(`/users/${user.uid}`).then(res => setProfile(res.data));
    }
  }, [user]);

  const handleSave = async () => {
    await api.put(`/users/${user.uid}`, profile);
    setEdit(false);
    alert("Profile updated!");
  };

  if (!user) return <div>Login required</div>;

  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
      {edit ? (
        <div>
          <input value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} />
          <input value={profile.email} onChange={e => setProfile(p => ({ ...p, email: e.target.value }))} />
          <input value={profile.university} onChange={e => setProfile(p => ({ ...p, university: e.target.value }))} />
          <input value={profile.address} onChange={e => setProfile(p => ({ ...p, address: e.target.value }))} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>University: {profile.university}</p>
          <p>Address: {profile.address}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
} 