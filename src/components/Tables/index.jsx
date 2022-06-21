import {headers} from './headers';
import {rows} from './data';
import React, { forwardRef, memo, useRef, useImperativeHandle, useCallback, useMemo, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import {useStateContext} from '../../context'




const Tables = () => {
    const {table, pagination, sorting, editTables, currentMode} = useStateContext();
    let table1pos = table;
    let table2pos = table + 1;
    const columnDefsUpperTable = useMemo(() => headers[table1pos], [table]);
    const columnDefsLowerTable = useMemo(() => headers[table2pos], [table]);
    const defaultColDef = useMemo(() => ({
        resizable: true,
        editable: editTables,
        sortable: sorting,
        flex: 1
    }), [sorting, editTables]);
    
    
    useEffect(() => {
        setTimeout(() => autoSizeAll(false), 1000);
    }, [table]);
    const autoSizeAll = useCallback((skipHeader) => {
        const allColumnIds = [];
        grid2Ref?.current?.columnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.getId());
        });
        grid2Ref?.current?.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
        grid1Ref?.current?.columnApi.getAllColumns().forEach((column) => {
            allColumnIds.push(column.getId());
          });
          grid1Ref?.current?.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
      }, []);
    useEffect(() => {
        setUpperRowData(rows[table]);
        setLowerRowData(rows[table + 1]);
        
    }, [table]);
    const [rowDataUpperTable, setUpperRowData] = useState(rows[table1pos]);
    const [rowDataLowerTable, setLowerRowData] = useState(rows[table2pos]);
    const grid1Ref = useRef(null);
    const grid2Ref = useRef(null);
    return (
        <>
        <div className="h-1/2">
            
            <AgGridReact
            ref={grid1Ref}
            className={`${currentMode === 'dark' ? 'ag-theme-alpine-dark': "ag-theme-alpine"}`}
            animateRows="true"
            columnDefs={columnDefsUpperTable}
            defaultColDef={defaultColDef}
            rowData={rowDataUpperTable}
            pagination={pagination}
        />
            </div>
            <div className="h-1/2">

                <AgGridReact
                ref={grid2Ref}
                className={`${currentMode === 'dark' ? 'ag-theme-alpine-dark': "ag-theme-alpine"}`}
                animateRows="true"
                columnDefs={columnDefsLowerTable}
                defaultColDef={defaultColDef}
                rowData={rowDataLowerTable}
                pagination={pagination}
        />
            </div>
        </>
    );
}

export default Tables;