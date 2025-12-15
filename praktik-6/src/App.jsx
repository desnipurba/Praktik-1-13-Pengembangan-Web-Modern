import './App.css';
import DataFetchingDemo from './components/DataFetchingDemo';
import EffectDependenciesDemo from './components/EffectDependenciesDemo';
import LifecycleDemo from './components/LifecycleDemo';

function App() {
  return (
    <div className="App">
      <h1>Praktik UseEffect dan Lifecycle - Pertemuan 6</h1>
      <LifecycleDemo />
      <DataFetchingDemo />
      <EffectDependenciesDemo />
    </div>
  );
}

export default App;