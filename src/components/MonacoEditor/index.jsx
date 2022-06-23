import React, {useCallback} from 'react'
import { useStateContext } from '../../context';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const MonacoEditor = () => {
    const {inputVal, setInputVal, currentMode} = useStateContext();
     const handleEditorChange = useCallback((value, event) => {
      setInputVal(value);
     },[]);
  return (
    <div className="w-full">
        <Editor
        height="25vh"
        // width="50%"
        defaultLanguage="sql"
        theme={`${currentMode === 'dark' ? 'vs-dark': "vs-light"}`}
        defaultValue={inputVal}
        onChange={handleEditorChange}
        />
    </div>
  )
}

export default React.memo(MonacoEditor);