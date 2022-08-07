import React,{useEffect, useState, useCallback} from 'react'
import { Button, IconButton, Icon, cx, XIcon, FormControl, Divider, FormLabel,Input } from "@vechaiui/react"
import {useStateContext} from "../../context";
import {MdOutlineContentCopy, MdOutlineContentPaste, MdOutlineClear, MdOutlineFileDownload, MdOutlineSave, MdOutlineUploadFile,MdOutlinePlayCircleOutline} from 'react-icons/md';
import {FaAssistiveListeningSystems} from 'react-icons/fa';
import { Dialog, Transition } from "@headlessui/react";

var myHeaders = new Headers();
myHeaders.append("Ocp-Apim-Subscription-Key", "7bb4ff1555c3497c9b8b231a6f2c74ad");
myHeaders.append("Content-Type", "application/ssml+xml");
myHeaders.append("X-Microsoft-OutputFormat", "audio-16khz-128kbitrate-mono-mp3");





const TopBar = ({copy=true, paste= true, clear = true, download = true, save = true, upload = true, execute = true, listen= true}) => {
    const {inputVal, setInputVal, saveInputVal, handleExecuteButton, history} = useStateContext();

    const [showDialog, setShowDialog] = React.useState(false);
    const inputRef = React.useRef(null);
    const [audio, setAudio] = useState(new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'));
    const [playing, setPlaying] = useState(false);
    
    const onListen = () => {
      var raw = `<speak version='1.0' xml:lang='en-US'>\r\n    <voice xml:lang='en-US' xml:gender='Female' name='en-US-JennyNeural'>\r\n        ${inputVal}\r\n    </voice>\r\n</speak>`;
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("https://eastus.tts.speech.microsoft.com/cognitiveservices/v1", requestOptions).then((response) => {
        response.blob().then((myBlob) => {
          const url = URL.createObjectURL(myBlob);
          var tempAudio = new Audio();
              tempAudio.src = url;
              tempAudio.load();
              setAudio(tempAudio);
              setPlaying(true);
        });
      });
    }
    const handleOpen = useCallback(() => setShowDialog(true), []);
    const handleClose = useCallback(() => setShowDialog(false),[]);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(inputVal);
    }, [inputVal]);
    const onPaste = useCallback(() => {
        navigator.clipboard.readText().then(text => setInputVal(text));
    },[])
    const onClear= useCallback(() => {
        setInputVal("");
    },[]);
    const onSave = useCallback(() => {
        saveInputVal();
    },[]);

    const onDownload = () => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(history.join('\n').toString()));
        element.setAttribute('download', 'sql-queries.sql');
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    }

    useEffect(() => {
        if(playing){
          audio.addEventListener('ended', () => {console.log("ENDED"); setPlaying(false)});
          audio.play();
           
        }else{
          audio.pause();
        } 
          
      },
      [playing]
    );
  return (
    <>
    <Transition show={showDialog} as={React.Fragment}>
        <Dialog
          initialFocus={inputRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={showDialog}
          onClose={handleClose}
        >
          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <div
              className={cx(
                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",
                "bg-white border border-gray-200",
                "dark:bg-neutral-800 dark:border-neutral-700",
                "max-w-md px-2"
              )}
            >
              <header
                className="relative px-3 pt-3 pb-2 text-lg font-semibold"
              >
                Upload File
              </header>
              <button
                onClick={handleClose}
                className="absolute text-sm text-gray-600 cursor-base dark:text-gray-400 hover:text-primary-500 top-4 right-4"
              >
                <XIcon className="w-4 h-4" />
              </button>
              <Divider
                orientation="horizontal"
                className="border-neutral-200 dark:border-neutral-700"
              />
              <div className="flex-1 px-3 py-2">

                <FormControl id="name">
                  <FormLabel>
                    Upload File (Currently Only supports txt files)
                  </FormLabel>
                  <Input className="pt-1"
                    ref={inputRef}
                    type="file"
                    accept=".csv,.xlsx,.xls, .sql, .txt"
                    onChange={(e) => {
                        const files = e.target.files;
                        
                        const reader = new FileReader()
                        reader.onload = async (e) => { 
                            const text = (e.target.result)
                            
                            setInputVal(text)
                        };
                        reader.readAsText(e.target.files[0])
                        if (files) {
                            
                            Papa.parse(files[0], {
                            complete: function(results) {
                                
                            }
                        })}
                        }}
                    />
                </FormControl>
              </div>
              <Divider
                orientation="horizontal"
                className="border-neutral-200 dark:border-neutral-700"
              />
              <footer className="flex justify-end px-3 py-2 space-x-4">
                <Button onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="solid" color="red" onClick={handleClose}>
                  Done
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>



        <div className="flex float-right items-right space-x-2 sm:pr-4">
            {copy && <IconButton onClick={onCopy} size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineContentCopy} label="copy" className="w-6 h-6" />
            </IconButton>}
            {paste && <IconButton onClick={onPaste} size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineContentPaste} label="paste" className="w-6 h-6" />
            </IconButton>}
            {clear && <IconButton onClick={onClear} size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineClear} label="clear" className="w-6 h-6" />
            </IconButton>}
            {download && <IconButton onClick={onDownload} size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineFileDownload} label="download" className="w-6 h-6" />
            </IconButton>}
            {save && <IconButton onClick={onSave}size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineSave} label="save" className="w-6 h-6" />
            </IconButton>}
            {upload && <IconButton onClick={handleOpen} size="md" variant="solid" color="secondary">
                <Icon as={MdOutlineUploadFile} label="upload" className="w-6 h-6" />
            </IconButton>}
             {listen && <IconButton onClick={onListen} size="md" variant="solid" color="secondary" disabled={playing}>
                <Icon as={FaAssistiveListeningSystems} label="listen" className="w-6 h-6" />
            </IconButton>}
            {execute && <Button onClick={handleExecuteButton} color="primary" variant="solid" leftIcon={<Icon as={MdOutlinePlayCircleOutline} label="gift" className="w-6 h-6 mr-1" />}>Execute</Button>}
        </div>
    </>
    
  )
}

export default React.memo(TopBar);