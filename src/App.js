import "./App.scss";
import Editor from "./components/editor/editor.component";
import Result from "./components/result/result.component";
import React, { useState } from "react";

const App = () => {
  let [editor, setEditor] = useState("");

  return (
    <div>
      <div className="nav-wrapper">
        <nav>
          <h1>CodeEditor</h1>
        </nav>
      </div>
      <div className="app">
        <Editor setEditor={setEditor} />
        <Result editor={editor} />
      </div>
    </div>
  );
};

export default App;
