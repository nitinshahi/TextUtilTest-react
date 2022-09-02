import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextBox heading="Enter Text to Analyze below" />
      </div>
    </>
  );
}

export default App;
