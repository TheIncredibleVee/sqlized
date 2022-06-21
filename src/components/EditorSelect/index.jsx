import React from 'react'
import { Tab } from "@headlessui/react";
import { cx } from "@vechaiui/react";
import MonacoEditor from '../MonacoEditor';
import GuidedEditor from '../GuidedEditor';
import AutoCompleteEditor from '../AutoCompleteEditor';
import CodeMirrorEditor from '../CodeMirrorEditor';
const EditorSelect = () => {
    const tabs = [
      { 
        value: "codeMirror",
        name: "Code Mirror Editor",
        content: <CodeMirrorEditor/>,
      },
        {
          value: "autoComplete",
          name: "Auto Complete Editor",
          content: <AutoCompleteEditor/>,
        //   icon: BellIcon,
        },
        {
          value: "guided",
          name: "Guided Editor",
          content: <GuidedEditor/>,
        //   icon: ShieldCheckIcon,
        },
        {
          value: "vsCode",
          name: "VS Code Editor",
          content: <MonacoEditor/>,
        //   icon: UserCircleIcon,
        },
      ];
    
      return (
        <div className="flex flex-wrap w-full p-8 space-x-4">
          <Tab.Group as="div" className="flex flex-col w-full" defaultIndex={0}>
            <Tab.List
              aria-label="tabs example"
              className={cx(
                "flex flex-row justify-start",
                "border-b border-neutral-200 dark:border-neutral-700"
              )}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  className={cx(
                    "px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                    "text-neutral-900 bg-transparent border-b-2 border-transparent",
                    "hover:border-neutral-300",
                    "selected:border-primary-500 selected:text-primary-600",
                    // dark
                    "dark:text-neutral-100",
                    "dark:hover:border-neutral-600",
                    "dark:selected:border-primary-500"
                  )}
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels >
              {tabs.map((tab) => (
                <Tab.Panel
                  key={tab.value}
                  value={tab.value}
                  className="p-4 flex-grow-1"
                >
                  {tab.content}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      )
}

export default EditorSelect; 