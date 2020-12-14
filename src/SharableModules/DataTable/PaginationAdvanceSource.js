import React, { Component, Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
export default function PaginationAdvanceSource({ dataSet, columnsSet, extraButtonsSet, configSet }){
     
      console.log(dataSet)
      console.log(columnsSet)
      console.log(extraButtonsSet)
      console.log(configSet)
      
      const columns = columnsSet
      const config = configSet
      const state = {
          records: dataSet.records
      }
      const extraButtons = extraButtonsSet
  return (
            <div>
                <ReactDatatable
                    config={config}
                    records={state.records}
                    columns={columns}
                    extraButtons={extraButtons}
                />
            </div>
        )
}
