import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import {useStateContext} from '../../context';
export default function CodeMirrorEditor() {
  const {inputVal, setInputVal, currentMode} = useStateContext();
  return (
    <CodeMirror
      value={inputVal}
      height="200px"
      theme={currentMode}
      extensions={[sql()]}
      onChange={(value, viewUpdate) => {setInputVal(value)}}
    />
  );
}