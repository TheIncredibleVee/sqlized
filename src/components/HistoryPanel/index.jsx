import React from 'react'
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { cx, Button, XIcon, SelectorIcon, Icon, Link } from "@vechaiui/react";
import {useStateContext} from '../../context';
import {MdOutlineCheck} from 'react-icons/md';
import ToolBox from '../ToolBox';
const HistoryPanel = () => {
  const completeButtonRef = React.useRef(null);
  const {historyPane, setHistoryPane, history} = useStateContext(); 
  const handleClose = () => {
    setHistoryPane(false);
  }

  return (
    <div className="p-8">

      <Transition show={historyPane} as={React.Fragment}>
        <Dialog
          initialFocus={completeButtonRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={historyPane}
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
                "max-w-md"
              )}
            >
              <header
                className="relative px-6 py-5 text-lg font-semibold"
              >
                History
              </header>
              <button
                onClick={handleClose}
                className={cx(
                  "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-500 top-4 right-4"
                  )}
              >
                <XIcon className="w-4 h-4" />
              </button>
              <div className="px-3 flex flex-col float-right">
                {/* <div className="w-2/3">
                  dsaf
                </div> */}
                <div className="flex-1 w-3/3 float-right text-right p-2 -mt-6">
                <Link className="pr-4 text-sm">
                  Download
                </Link>
                <ToolBox upload={false} clear = {false} copy={false} execute={false} paste = {false} save={false}/>

                </div>

              </div>

              <div className="flex-1 px-6 py-2">
                {
                  history.map((item, index) => {
                    return (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon className="w-4 h-4" icon={MdOutlineCheck} />
                          <span className="ml-2">{item}</span>
                        </div>
                      </div>
                    )
                })
                }
              </div>
              <footer className="px-6 py-4">
                <Button ref={completeButtonRef} variant="light" color="primary" onClick={handleClose}>
                  Done
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

export default HistoryPanel