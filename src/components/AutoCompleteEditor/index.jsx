import React, { useState } from 'react'
import Input from '@reactmaker/react-autocorrect-input';
import {dataSource} from "./data";
import { useStateContext } from '../../context';
const AutoCompleteEditor = () => {
    const {inputVal, setInputVal, currentMode} = useStateContext();
    const onChange = (inputVal) => setInputVal(inputVal);
    
    return (
        <Input onChange={onChange} value={inputVal} dataSource={dataSource} className={`w-full ${currentMode==='dark'? "bg-[#00000028] text-[#ffffff90]":""}`} />
    )
}

export default AutoCompleteEditor