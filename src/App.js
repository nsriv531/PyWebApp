// Import React and Monaco Editor
import React from 'react';
import Editor from "@monaco-editor/react";  // Monaco Editor import

function App() {
  const defaultCode = `print("Hello, World!")`; // Default Python code

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nik's Py Web App</h1>
        {/* Code Editor */}
        <Editor
          height="80vh"                   // Set the height of the editor
          defaultLanguage="python"         // Set the language to Python
          defaultValue={defaultCode}       // Initial code displayed in the editor
          theme="vs-dark"                  // Optional: Set a theme, "vs-dark" for dark mode
        />
        <p>Edit the code and click "Run" to see the output!</p>
      </header>
    </div>
  );
}

export default App;
