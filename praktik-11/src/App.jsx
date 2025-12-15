import React from 'react';
// Pastikan semua komponen demo diimpor
import CounterDemo from './components/CounterDemo';
import FormDemo from './components/FormDemo';
import ApiDemo from './components/ApiDemo';
import LocalStorageDemo from './components/LocalStorageDemo';
import ToggleDemo from './components/ToggleDemo';
// Impor file CSS
import './App.css';
import './style.css'; // Atau hilangkan jika Anda hanya menggunakan App.css

function App() {
  return (
    <div className="app">
      <h1>Custom Hooks & Reusability</h1>

      <div className="demo-section">
        <h2>1. useCounter Hook</h2>
        <CounterDemo />
      </div>
      
      {/* Tambahkan demo lainnya juga, jika Anda sudah punya filenya */}
      <div className="demo-section">
        <h2>2. useForm Hook</h2>
        <FormDemo />
      </div>

      <div className="demo-section">
        <h2>3. useApi Hook</h2>
        <ApiDemo />
      </div>

      <div className="demo-section">
        <h2>4. useLocalStorage Hook</h2>
        <LocalStorageDemo />
      </div>

      <div className="demo-section">
        <h2>5. useToggle Hook</h2>
        <ToggleDemo />
      </div>
    </div>
  );
}

export default App;