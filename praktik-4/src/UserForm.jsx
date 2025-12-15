import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !email) {
      alert("Semua field harus diisi!");
      return;
    }

    const newUser = {
      id: new Date().getTime().toString(),
      name,
      age: parseInt(age),
      email,
      registered,
    };

    setUsers([...users, newUser]);
    setName("");
    setAge("");
    setEmail("");
    setRegistered(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-form-container">
      <h2>Formulir Pengguna</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>Nama:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
          />
        </div>

        <div className="form-group">
          <label>Usia:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Masukkan usia"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={registered}
              onChange={(e) => setRegistered(e.target.checked)}
            />
            Sudah terdaftar
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Tambah Pengguna
        </button>
      </form>

      <div className="users-list">
        <h3>Registered Users ({users.length})</h3>
        {users.length === 0 ? (
          <p className="no-user">Belum ada user yang terdaftar</p>
        ) : (
          <div className="users-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  ✖
                </button>
                <p>
                  <strong>{user.name}</strong>
                </p>
                <p>{user.email}</p>
                <p>{user.age} tahun</p>
                <small>
                  Registered: {user.registered ? "Y" : "N"}
                </small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
