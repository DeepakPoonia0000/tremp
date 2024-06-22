import Announcements from './components/Announcements';
import Fotter from './components/Fotter';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (

    <div className="App" style={{ background: "black", width: "100%" }}>
      <Announcements />
      <NavBar/>
      <Hero />
      <Fotter />
    </div>
  );
}

export default App;