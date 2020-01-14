import React, { useState } from 'react';
import './generate-data-table.scss';
import { tableColSettings } from './table';

const GenerateTable = ({tableData, colms, settings, onMenuItemClicked}) => {

    const [showInput, toggelInput] = useState(false);

    const onInputChanged = (item, index, key, e) => {
        if(e.key.toLowerCase() == 'enter') {
            let data = Object.assign({}, item);
            data[key] = e.target.value;
            console.log(data);
            toggelInput(false);
            onMenuItemClicked(data, index, 'edit');
        }
        //let data = document.getElementById(item.id);
    }

    const onMenuItemClick = (item, index, action) => {
        if (action == 'edit') {
            if (settings.menu.inlineEdit) {
                toggelInput(true);
            } else
                onMenuItemClicked(item, index, action)
        }
        else
            onMenuItemClicked(item, index, action)
    }

    return (<div className="generate-table">
        <table>
            <thead>
                <tr>
                    {colms.map((data,index) =>
                        <th key={index}> {data.displayName} </th>
                    )}
                    { settings.menu.active ? <th>Menu</th>: ''}
                </tr>
                
                {tableData.map((item,tableDataIndex) =>
                    <tr key={item.id}>
                        {colms.map((col:tableColSettings,index) => {
                            if (col.fieldType == 'text') {
                                if(col.inlineEdit && showInput) {
                                    return <td key={index}> <input id={item.id} defaultValue={item[col.key].toString()} onKeyDown={(e)=>onInputChanged(item, tableDataIndex, col.key, e)}/> </td>
                                } else {
                                    return <td key={index}>{item[col.key].toString()}</td>
                                }
                            } else if (col.fieldType == 'date') {
                                return <td key={index}>{item[col.key].toDateString()}</td>
                            }
                        }
                        )}
                        {settings.menu.active ? 
                            <td>
                                {settings.menu.items.map(menuItem => <a onClick={() => onMenuItemClick(item, tableDataIndex, menuItem)}>{menuItem}</a>)}
                            </td>
                        : ''}
                    </tr>
                )}
            </thead>
        </table>
    </div>);
}

export default GenerateTable;