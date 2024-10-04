import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="MyApp" aboutText = "About Us"/>
      {/* <Navbar /> */}
      <div className="container my-3">
      <TextForm heading="Enter text"/>
      </div>
    </>
  );
}

export default App;
