// Import React and Monaco Editor
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";  // Monaco Editor import

function App() {
  const [code, setCode] = useState('print("Hello, World!")');  // Code from editor
  const [output, setOutput] = useState('');  // Output state

  // Function to handle code execution (for now, it will be a mock function)
  const runCode = () => {
    // Mock execution - replace this with actual back-end API calls for Python code execution
    const mockOutput = `Executing Python code...\nOutput: Hello, World!`;
    setOutput(mockOutput);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NashPy</h1>

        {/* Code Editor */}
        <Editor
          className="editor-container"
          height="50vh"                   // Set the height of the editor
          defaultLanguage="python"         // Set the language to Python
          value={code}                     // Current code in the editor
          onChange={(value) => setCode(value)}  // Update state with code changes
          theme="vs-dark"                  // Optional: Set a theme, "vs-dark" for dark mode
        />

        {/* Run Code Button */}
        <button className="run-button" onClick={runCode}>Run Code</button>

        {/* Output Window */}
        <div className="output-window">
          <pre>{output}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
