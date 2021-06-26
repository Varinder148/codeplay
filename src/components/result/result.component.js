import React, { useEffect, useRef } from "react";
import "./result.style.scss";
const Result = ({ editor }) => {
  return (
    <div className="result">
      <p>Your Result will show here</p>
      <iframe id="frame-res" srcdoc={editor}></iframe>
    </div>
  );
};

export default Result;
