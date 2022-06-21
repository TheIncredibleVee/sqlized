import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Select,
    Input,
    Button,
  } from "@vechaiui/react"
import {commands, mapping} from "./data";
import ListOptions from './ListOptions';

const GuidedEditor = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [selectedCommand, setSelectedCommand] = useState(commands[0]);

    // useEffect(()=>{
    //     
    //     
    // },[selectedCommand]);

    return (
        <div className="w-full p-8 space-x-4">
            <div className="flex flex-row">
                <FormLabel className="ml-6 mt-2">Select the type of query</FormLabel>
                <ListOptions selectedCommand={selectedCommand} setSelectedCommand={setSelectedCommand} />
            </div>
        <form  className=" flex flex-row min-w-full space-x-4">
           {mapping[selectedCommand].fields.map((field, idx)=>{
                return field.type !== "text" ? (
                    <Input className="flex-1" placeholder={field.value} />
                ):(
                    <Button variant='solid' color="primary" className="flex-1 cursor-default">{field.value}</Button>
                )
           })}
        </form>
        </div>
    )
}

export default GuidedEditor