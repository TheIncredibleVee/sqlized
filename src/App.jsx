import { useEffect } from 'react'
import './App.css'
import alanBtn from '@alan-ai/alan-sdk-web';
import { VechaiProvider, extendTheme, Button } from "@vechaiui/react";
import {bee, midnight, pale, dawn, cool} from "./themes";
import { ToolBox, Sidebar, Navbar, TableWrapper, Output, EditorSelect, Setting, HistoryPanel} from './components';
import { useStateContext } from './context';

const themeSet = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    bee,
    cool,
    dawn,
    midnight,
    pale
  },
});


function App() {

  const {sidebar, theme, inputVal, setInputVal} =useStateContext();

  useEffect(() => {
    alanBtn({
        key: '07e5cc68da04038ae7ee483d2ed6a4d02e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          console.log(commandData.command === 'SELECT');
          if (commandData?.command === 'SELECT') {
            setInputVal(`SELECT ${commandData.COL} FROM ${commandData.TABLE};`);
          }
        }
    });
  }, []);
  return (
    
    <VechaiProvider theme={themeSet} colorScheme={theme}>
      <div className="min-h-screen flex flex-col h-screen">
        
        <div className="flex-1 flex flex-row overflow-y-hidden">
          <main className="flex-1 overflow-y-auto">
          <div className="flex-row">
          <Navbar />
          <div className="h-14 p-2 border rounded">
            <ToolBox/>
          <Setting/>
          <HistoryPanel/>
          </div>

          </div>
         <div className="w-full">
          <EditorSelect/>
            </div>
            <div className=" p-2 h-[45%]">
                <Output/>
              </div>
            </main>

          {<nav className={`order-first sm:w-0 xs:w-0 ${sidebar? 'lg:w-1/6 xl:w-1/10 md:w-1/6': 'lg:w-8 xl:w-12 md:8'} overflow-y-auto border-[#00000035] border-2 rounded-t bg-[#00000020]`}>
            <Sidebar/>
          </nav>}

          <aside className=" sm:w-0 xs:w-0 lg:w-1/4 xl:w-1/4 md:w-1/4 overflow-y-auto">
            <TableWrapper/>
          </aside>
        </div>

        <footer className="text-center bg-[#00000045]">Made By @<a href="https://www.github.com/theincrediblevee">TheIncredibleVee</a></footer>
      </div>

{/* 
      <div >
         
         </div>
      </div> */}
    </VechaiProvider>
  )
}

export default App
