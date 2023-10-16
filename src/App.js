import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("test test test test");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <div className="card" onClick={() => setStatus(!status)}>
        {text}
        <h1>TITLE</h1>
        <p>{}</p>
      </div>

      <div className="changeText" style={{ opacity: status ? 0 : 1 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h1
          onClick={() => {
            setStatus(false);
            setText(input);
          }}
        >
          +
        </h1>
      </div>
    </div>
  );
}

export default App;
