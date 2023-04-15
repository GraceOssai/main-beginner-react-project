import './App.css';
import Blog from './components/Blog';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Blog/>
    </div>
  );
}

export default App;
