import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accordion title="Section 1">
        <p>This is the content for Section 1.</p>
      </Accordion>

      <Accordion title="Section 2">
        <p>This is the content for Section 2.</p>
      </Accordion>

      <Accordion title="Section 3">
        <p>This is the content for Section 3.</p>
      </Accordion>
    </div>
  );
}

export default App;
