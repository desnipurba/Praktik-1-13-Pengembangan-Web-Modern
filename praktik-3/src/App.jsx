import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ahmad Rizki', email: 'ahmad@example.com', avatar: 'https://i.pravatar.cc/150?img=12', role: 'Admin' },
    { id: 2, name: 'Sari Dewi', email: 'sari@example.com', avatar: 'https://i.pravatar.cc/150?img=5', role: 'User' },
    { id: 3, name: 'Budi Santoso', email: 'budi@example.com', avatar: 'https://i.pravatar.cc/150?img=15', role: 'Moderator' },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop ASUS VivoBook', category: 'Electronics', price: 'Rp 8.500.000', image: 'https://i.ibb.co/0jqHpnp/laptop.png', stock: 5 },
    { id: 2, name: 'Smartphone Samsung A54', category: 'Electronics', price: 'Rp 4.200.000', image: 'https://i.ibb.co/4pDNDk1/phone.png', stock: 0 },
    { id: 3, name: 'Buku Pemrograman React', category: 'Books', price: 'Rp 150.000', image: 'https://i.ibb.co/9t8T9cK/books.png', stock: 12 },
    { id: 4, name: 'Mouse Wireless Logitech', category: 'Electronics', price: 'Rp 350.000', image: 'https://i.ibb.co/r0fNq5b/mouse.png', stock: 3 },
  ]);

  const handleAddUser = () => {
    const id = users.length + 1;
    setUsers([...users, { id, name: `User ${id}`, email: `user${id}@example.com`, avatar: `https://i.pravatar.cc/150?img=${id+10}`, role: 'User' }]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleEditUser = (id) => {
    alert(`Edit user id: ${id}`);
  };

  const handleAddToCart = (id) => {
    alert(`Produk ${id} ditambahkan ke keranjang`);
  };

  return (
    <div className="App">
      <Header title="Demo Komponen React dengan Props" subtitle="Pemrograman Web Modern - Pertemuan 3" userName="Admin" />

      <main className="App-main">
        <section className="users-section">
          <h3 className="section-title">Manajemen Pengguna ({users.length} users)</h3>
          <div className="section-action">
            <Button label="+ Tambah User" variant="success" onClick={handleAddUser} />
          </div>

          <div className="users-list">
            {users.map(u => (
              <UserCard key={u.id} user={u} onEdit={handleEditUser} onDelete={handleDeleteUser} />
            ))}
          </div>
        </section>

        <section className="products-section">
          <h3 className="section-title center">Katalog Produk</h3>
          <div className="section-action center">
            <Button label="+ Tambah Produk" variant="primary" />
          </div>

          <p className="product-count">Daftar Produk ({products.length} items)</p>

          <div className="products-grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} onAdd={handleAddToCart} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
