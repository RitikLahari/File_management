import React, { useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";

const CodeEditor = ({ fileName, data, setData }) => {
  const outputRef = useRef(null);

  const Codes = {
    html: "xml",
    php: "php",
    js: "javascript",
    txt: "textile",
    xml: "xml",
    css: "css",
    c: "clike",
    cpp: "clike",
    cs: "clike",
    java: "java",
    py: "python",
    json: "javascript",
  };

  // Handle Tab indentation
  const handleKeyDown = (evt) => {
    if (evt.key === "Tab") {
      evt.preventDefault();
      const { selectionStart, selectionEnd } = evt.target;
      const newValue =
        data.substring(0, selectionStart) + "    " + data.substring(selectionEnd);
      setData(newValue);
      setTimeout(() => {
        evt.target.selectionStart = evt.target.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  // Sync scroll between textarea and output
  const handleScroll = (e) => {
    if (outputRef.current) {
      outputRef.current.scrollTop = e.target.scrollTop;
      outputRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  return (
    <div className="row px-5 mt-3">
      <div className="col-md-12 mx-auto code-edit-container p-3">
        <textarea
          className="code-input w-100 "
          value={data}
          onKeyDown={handleKeyDown}
          onChange={(e) => setData(e.target.value)}
          onScroll={handleScroll}
        />
        <pre className="code-output pr-1" ref={outputRef}>
          <SyntaxHighlighter
            language={Codes[fileName.split(".")[1]] || "text"}
            showLineNumbers
            style={duotoneLight}
            wrapLines
            startingLineNumber={1}
          >
            {data}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
