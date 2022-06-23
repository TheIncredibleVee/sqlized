import React,{useCallback} from 'react'
import { Button, IconButton, Icon, cx, XIcon, FormControl, Divider, FormLabel,Input } from "@vechaiui/react"
import {useStateContext} from "../../context";
import {MdOutlineContentCopy, MdOutlineContentPaste, MdOutlineClear, MdOutlineFileDownload, MdOutlineSave, MdOutlineUploadFile,MdOutlinePlayCircleOutline} from 'react-icons/md'
import { Dialog, Transition } from "@headlessui/react";
const TopBar = ({copy=true, paste= true, clear = true, download = true, save = true, upload = true, execute = true}) => {
    const [showDialog, setShowDialog] = React.useState(false);
    const inputRef = React.useRef(null);

    const handleOpen = useCallback(() => setShowDialog(true), []);
    const handleClose = useCallback(() => setShowDialog(false),[]);

    const {inputVal, setInputVal, saveInputVal, handleExecuteButton, history} = useStateContext();
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
            {execute && <Button onClick={handleExecuteButton} color="primary" variant="solid" leftIcon={<Icon as={MdOutlinePlayCircleOutline} label="gift" className="w-6 h-6 mr-1" />}>Execute</Button>    }
        </div>
    </>
    
  )
}

export default React.memo(TopBar);