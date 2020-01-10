import React, { useState } from 'react';
import './generate-data-table.scss';

const GenerateTable = ({tableData, colms}) => {
    console.log(tableData);
    console.log(colms);
    return (<div className="generate-table">
        <table>
            <thead>
                <tr>
                    {colms.map((data,index) =>
                        <th key={index}> {data.displayName} </th>
                    )}
                </tr>
                {tableData.map((item,index) =>
                    <tr key={index}>
                        {colms.map((col,index) => {
                            if (col.fieldType == 'text') {
                               return <td key={index}>{item[col.key].toString()}</td>
                            } else if (col.fieldType == 'date') {
                                return <td key={index}>{item[col.key].toDateString()}</td>
                            }
                        }
                        )}
                    </tr>
                )}

            </thead>
        </table>
    </div>);
}

export default GenerateTable;