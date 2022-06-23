import React,{useCallback} from 'react'
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { cx, Button, XIcon, SelectorIcon, Icon, Switch } from "@vechaiui/react";
import {useStateContext} from '../../context';
import {MdOutlineCheck} from 'react-icons/md';
const themes = [
  'midnight',
  'bee',
  'pale',
  'dawn',
  'cool',
  'light',
]
const Setting = () => {
  const completeButtonRef = React.useRef(null);
  const {settings, setSettings, theme, saveTheme, setTheme, pagination, sorting, editTables, setPagination, setEditTables, setSorting} = useStateContext(); 
  const handleClose = useCallback(() => {
    saveTheme();
    setSettings(false);
  },[]);

  return (
    <div className="p-8">
      <Transition show={settings} as={React.Fragment}>
        <Dialog
          initialFocus={completeButtonRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={settings}
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
                Settings
              </header>
              <button
                onClick={handleClose}
                className={cx(
                  "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-500 top-4 right-4"
                )}
              >
                <XIcon className="w-4 h-4" />
              </button>
              <div className="flex-1 px-6 py-2">
                <Listbox
                  value={theme}
                  onChange={setTheme}
                  as="div"
                  className="relative space-y-1"
                >
                  {({ open }) => (
                    <>
                      <Listbox.Button
                        className={cx(
                          "relative w-full min-w-0 inline-flex items-center appearance-none focus:outline-none",
                          "h-9 px-3 py-0 text-sm rounded-base pr-6 cursor-base",
                          "border shadow-sm border-neutral-200",
                          "text-neutral-900 bg-white",
                          "hover:border-neutral-300",
                          "focus:ring-1 focus:ring-primary-500 focus:border-primary-500",
                          "dark:border-neutral-700",
                          "dark:text-neutral-100 dark:bg-base",
                          "dark:hover:border-neutral-600",
                          "dark:focus:border-primary-500"
                        )}
                      >
                        {!theme && (
                          <span className="text-sm text-gray-400 truncate">
                            Choose an item
                          </span>
                        )}
                        <span className="text-sm truncate">{theme}</span>
                        <span className="absolute flex items-center ml-3 pointer-events-none right-1">
                          <Icon
                            as={SelectorIcon}
                            className={cx(
                              "w-4 h-4",
                              open ? "text-primary-500" : "text-gray-400"
                            )}
                            label="selector"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={React.Fragment}
                        enter="transition ease-in-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-out duration-75"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options
                          static
                          className={cx(
                            "absolute left-0 z-40 max-h-64 w-full mt-2 origin-top-left rounded-base shadow-sm outline-none overflow-auto",
                            "bg-white border border-gray-200",
                            "dark:bg-neutral-800 dark:border-gray-700",
                            "py-1.5 px-1.5 space-y-1"
                          )}
                        >
                          {themes.map((theme) => (
                            <Listbox.Option
                              className="relative"
                              key={theme}
                              value={theme}
                            >
                              {({ active, selected, disabled }) => (
                                <button
                                  disabled={disabled}
                                  aria-disabled={disabled}
                                  className={cx(
                                    "flex items-center w-full px-4 pl-10 h-9 border-0 flex-shrink-0 text-sm text-left cursor-base font-normal focus:outline-none rounded-base",
                                    active && "bg-neutral-100 dark:bg-neutral-700",
                                    selected &&
                                      "bg-primary-50 text-primary-800 dark:bg-primary-200 dark:bg-opacity-15 dark:text-primary-200",
                                  )}
                                >
                                  <span
                                    className={cx(
                                      "flex-1 block truncate",
                                      selected ? "font-semibold" : "font-normal"
                                    )}
                                  >
                                    {theme}
                                  </span>
                                  {selected && (
                                    <span className="absolute inset-y-0 left-0 flex items-center justify-center w-10">
                                      <Icon
                                        as={MdOutlineCheck}
                                        label="check"
                                        className="w-5 h-5 text-primary-500"
                                      />
                                    </span>
                                  )}
                                </button>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </>
                  )}
                </Listbox>
                <div className="flex flex-row space-x-4 pt-4 pb-2">
                        <p className="w-5/6">
                            Enable Pagination
                        </p>
                        <Switch checked={pagination} onChange={(()=>setPagination(!pagination))} className="" />
                    </div>
                    <div className="flex flex-row space-x-4 py-2">
                        <p className="w-5/6">
                            Enable Sorting By Col
                        </p>
                        <Switch checked={sorting} onChange={(()=>setSorting(!sorting))} className="" />
                    </div>
                    <div className="flex flex-row space-x-4 py-2">
                        <p className="w-5/6">
                            Enable Edit Tables
                        </p>
                        <Switch checked={editTables} onChange={(()=>setEditTables(!editTables))} className="" />
                    </div>
              </div>
              <footer className="px-6 py-4">
                <Button ref={completeButtonRef} variant="light" color="primary" onClick={handleClose}>
                  Complete
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

export default React.memo(Setting);