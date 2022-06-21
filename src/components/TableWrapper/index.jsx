import React, {useState, useEffect} from 'react'
import { Dialog, Transition, Listbox,   } from "@headlessui/react";
import { cx, Button, FormLabel,  FormControl, Divider, XIcon, Icon, SelectorIcon, Switch } from "@vechaiui/react";
import {useStateContext} from '../../context'
import Tables from '../Tables';
const tables = [
    "Categories" ,
    "Customers",
    "employee_territories" ,
    "employees" ,
    "order_details" ,
    "orders" ,
    "products" ,
    "regions" ,
    "shippers" ,
    "suppliers",
    "territories",
]
const tablesMapping = {
    "Categories" : 1,
    "Customers": 2,
    "employee_territories" : 3,
    "employees" : 4,
    "order_details" : 5,
    "orders" : 6,
    "products" : 7,
    "regions" : 8,
    "shippers" : 9,
    "suppliers" : 10,
    "territories" : 11,
}


const TableWrapper = () => {
    const {table, setTable, pagination, editTables, sorting, setSorting, setEditTables, setPagination} = useStateContext();

    const [showDialog, setShowDialog] = useState(false);
  const inputRef = React.useRef(null);
  const [selectedTable, setSelectedTable] = useState(tables[table]);
    const handleSelect =()=>{
        setTable(tablesMapping[selectedTable]);
        setShowDialog(false);
        setSelectedTable(tables[table]);
    }
  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);

  return (
    <>
    <div className="p-2 w-full flex justify-center bg-[#00000035]">
      <Button onClick={handleOpen} color="primary" variant= "solid" className="content-center items-center self-center align-center">Select Table</Button>
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
                Confirm deletion
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
                    Settings
                  </FormLabel>
                  <div className="p-8">
                    <Listbox
                        value={selectedTable}
                        onChange={setSelectedTable}
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
                            {!selectedTable && (
                                <span className="text-sm text-gray-400 truncate">
                                Choose an item
                                </span>
                            )}
                            <span className="text-sm truncate">{selectedTable}</span>
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
                                "py-1.5 px-1.5"
                                )}
                            >
                                {tables.map((person) => (
                                <Listbox.Option
                                    className="relative"
                                    key={person}
                                    value={person}
                                >
                                    {({ active, selected, disabled }) => (
                                    <button
                                        disabled={disabled}
                                        aria-disabled={disabled}
                                        className={cx(
                                        "flex items-center w-full px-3 h-9 border-0 flex-shrink-0 text-sm text-left cursor-base font-normal focus:outline-none rounded-base",
                                        active && "bg-neutral-100 dark:bg-neutral-700",
                                        )}
                                    >
                                        <span
                                        className={cx(
                                            "flex-1 block truncate",
                                            selected ? "font-semibold" : "font-normal"
                                        )}
                                        >
                                        {person}
                                        </span>
                                        {selected && (
                                        <span
                                            className="absolute h-6 rounded-full -left-1 bg-primary-500"
                                            style={{ width: 2 }}
                                        ></span>
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
                <Button variant="solid" color="primary" onClick={handleSelect}>
                  Select
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
    <div className="flex flex-col p-2 h-[94.3%] bg-[#00000025]">
        <Tables/>
    </div>

    </>
  )
}

export default TableWrapper