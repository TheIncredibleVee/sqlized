import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const darkThemes = [
  'midnight',
  'pale',
  'cool',
  'dawn',
]

export const ContextProvider = ({ children }) => {

  const [inputVal, setInputVal] = useState(localStorage.getItem('inputVal') || '');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dawn');
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') || 'dark');
  const [showTables, setShowTables] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [settings, setSettings] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [table, setTable] = useState(localStorage.getItem('table') || 0);
  const [output, setOutput] = useState(-1);
  const [history, setHistory] = useState(localStorage.getItem('sql_history')?.split(',') ||[]);
  const [pagination, setPagination] = useState(localStorage.getItem('pagination') || true);
  const [editTables, setEditTables] = useState(localStorage.getItem('editTables') || true);
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'true');
  const [historyPane, setHistoryPane] = useState(false);

  const handleExecuteButton = (e) =>{
    if(inputVal ===''){
      return;
    }
    e.preventDefault();
    let tempHistory = history;
    if(history){
      tempHistory.push(inputVal);
    }else{
      tempHistory = [inputVal];
    }
    setHistory(tempHistory);
    localStorage.setItem('sql_history', history);
    setInputVal('');
    const temp = Math.floor(Math.random() * 5);
    if(output == temp){
      setOutput((temp+1)%5);
    }else{
      setOutput(temp);
    }
  }
  const saveTable = () =>{
    e.preventDefault();
    localStorage.setItem('table', table);
  }
  const setMode = (mode) => {
    localStorage.setItem('themeMode', mode);
  };
    const saveInputVal = () => {
        localStorage.setItem('inputVal', inputVal);
    }

  const saveTheme = () => {
    if(darkThemes.indexOf(theme) > -1){
      setCurrentMode('dark'); 
      setMode('dark');
    }else{
      setCurrentMode('light');
      setMode('light');
    }
    localStorage.setItem('theme', theme);
  };

  const handleClick = (clicked) => setSettings({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{setHistoryPane, historyPane, sorting, setSorting, editTables, setEditTables, pagination, setPagination, settings, setTheme, setSettings, saveTable, handleExecuteButton, history, output, table, setTable, sidebar, setSidebar, saveInputVal, setInputVal, theme, currentMode, activeMenu, inputVal, handleClick, isClicked: settings, initialState, setIsClicked: setSettings, setActiveMenu, saveTheme, setCurrentMode, setMode,  themeSettings: showTables, setThemeSettings: setShowTables }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
