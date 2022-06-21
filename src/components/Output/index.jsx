import {headers} from './headers'
import {rows} from './data'
import {useStateContext} from '../../context'
import React, { forwardRef, memo, useRef, useImperativeHandle, useCallback, useMemo, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


const Output = () => {
    const gridRef = useRef();
    const {output} = useStateContext();
    const [rowData ,setRowData] = useState(rows[output]);
    const colData = useMemo(() => headers[output], [output]);
    const defaultColDef = useMemo(() => ({
        resizable: true,
        editable: false,
        sortable: true,
        flex: 1
    }), []);
    useEffect(() => {
        setTimeout(() => autoSizeAll(false), 1000);
    }, [output]);
    const autoSizeAll = useCallback((skipHeader) => {
        const allColumnIds = [];
        gridRef?.current?.columnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.getId());
        });
        gridRef?.current?.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
      }, []);
    useEffect(() => {
        setRowData(rows[output]);
    }, [output]);
    return output !== -1 ? (
        <div className="h-full">
            
            <AgGridReact
            ref ={gridRef}
            className="ag-theme-balham-dark"
            animateRows="true"
            columnDefs={colData}
            defaultColDef={defaultColDef}
            rowData={rowData}
            pagination={true}
            />
        </div>
    ): (<></>)
}

export default Output