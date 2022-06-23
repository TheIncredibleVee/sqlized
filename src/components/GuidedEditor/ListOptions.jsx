import React, {useState} from 'react'
import {commands} from "./data";
import { Listbox, Transition } from "@headlessui/react";
import { cx, Icon, SelectorIcon} from "@vechaiui/react";

const ListOptions = ({selectedCommand, setSelectedCommand}) => {
  return (
    <div className="pb-6 pl-4 flex-1 w-1/2">
      <Listbox
        value={selectedCommand}
        onChange={setSelectedCommand}
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
              {!selectedCommand && (
                <span className="text-sm text-gray-400 truncate">
                  Choose an item
                </span>
              )}
              <span className="text-sm truncate">{selectedCommand}</span>
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
                {commands.map((person) => (
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
    </div>
  )
}

export default React.memo(ListOptions);