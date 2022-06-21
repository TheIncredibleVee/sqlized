import React from 'react'
import { useStateContext } from '../../context';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const MonacoEditor = () => {
    const {inputVal, setInputVal} = useStateContext();
    function handleEditorChange(value, event) {
        
        setInputVal(value);
        
      }
    
      function handleEditorDidMount(editor, monaco) {
        
        
      }
    
      function handleEditorWillMount(monaco) {
        
      }
    
      function handleEditorValidation(markers) {
        // model markers
        // markers.forEach(marker => 
      }
  return (
    <div className="w-full">
        <Editor
        height="25vh"
        // width="50%"
        defaultLanguage="sql"
        theme="vs-dark"
        defaultValue={inputVal}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onValidate={handleEditorValidation}
        />
    </div>
  )
}

export default MonacoEditor