import React, { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";
import styled from '@emotion/styled';
import Toolbar from "./Toolbar";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

// Removed as we're using inline styles

const CodeEditor = ({ fileName, data, setData }) => {
  const outputRef = useRef(null);
  const textareaRef = useRef(null);
  const [formatOptions, setFormatOptions] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    align: 'left',
    list: null,
    script: null
  });
  const [fontSize, setFontSize] = useState(24);
  const [fontFamily, setFontFamily] = useState('Calibri');

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
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' , backgroundColor: '#fff'}}>
        <Toolbar
          formatOptions={formatOptions}
          setFormatOptions={setFormatOptions}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
        />
        <div className="col-md-12 mx-auto code-edit-container">
          <textarea
            className="code-input"
            value={data}
            onKeyDown={handleKeyDown}
            onChange={(e) => setData(e.target.value)}
            onScroll={handleScroll}
            spellCheck="false"
            ref={textareaRef}
            style={{
              fontFamily: fontFamily,
              fontSize: `${fontSize}px`,
              fontWeight: formatOptions.bold ? 'bold' : 'normal',
              fontStyle: formatOptions.italic ? 'italic' : 'normal',
              textDecoration: `${formatOptions.underline ? 'underline' : ''} ${formatOptions.strikethrough ? 'line-through' : ''}`.trim(),
              textAlign: formatOptions.align || 'left',
              verticalAlign: formatOptions.script || 'baseline',
              lineHeight: '1.5',
              padding: '1rem',
              color: '#000',
              backgroundColor: '#f5f5f5',
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              resize: 'none',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}
          />
        <pre className="code-output pr-1" ref={outputRef}>
          <SyntaxHighlighter
            language={Codes[fileName.split(".")[1]] || "text"}
            // showLineNumbers
            style={duotoneLight}
            wrapLines
            startingLineNumber={1}
          >
            {data}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
    </div>
  );
};

export default CodeEditor;
