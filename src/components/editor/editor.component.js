import React, { useRef, useState } from "react";
import "./editor.style.scss";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = ({ setEditor }) => {
  let [editorValue, setEditorvalue] = useState("");

  const onChange = (e) => {
    setEditorvalue(e);
  };

  const saveFile = () => {
    setEditor(editorValue);
  };

  const downloadFile = () => {
    let text = editorValue;
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "download.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <>
      <div className="editor">
        <div className="options">
          <button className="btn" onClick={() => setEditorvalue("")}>
            Reset
          </button>

          <button className="btn" onClick={downloadFile}>
            Download file
          </button>
          <button className="btn" onClick={saveFile}>
            Run
          </button>
        </div>
        <AceEditor
          placeholder="Write your code here"
          mode="javascript"
          theme="monokai"
          onChange={onChange}
          value={editorValue}
          fontSize={22}
          highlightActiveLine={true}
          height="100%"
          width="100%"
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </>
  );
};

export default Editor;
