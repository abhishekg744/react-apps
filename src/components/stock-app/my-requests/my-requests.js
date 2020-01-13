import React, { useState, Component } from 'react';
import GenerateTable from '../helpers/generate-data-table/generate-data-table';
import { tableColSettings, tableSettings, tableMenuSettings } from '../helpers/generate-data-table/table';

class MyRequest extends Component {
  constructor(props) {
    super(props);

    let tableData = [
      { id: 1, name: 'd.Roy', department: 'finanace', checked: true, date: new Date() },
      { id: 2, name: 'D K Bos', department: 'finanace1', checked: true, date: new Date() },
      { id: 3, name: 'Jonny', department: 'finanace2', checked: true, date: new Date() },
      { id: 4, name: 'Ram', department: 'finanace3', checked: true, date: new Date() },
      { id: 5, name: 'Sham D', department: 'finanace4', checked: true, date: new Date() },
    ]

    let colms: tableColSettings[] = [
      { key: 'name', displayName: 'Name', fieldType: 'text', inlineEdit: true },
      { key: 'department', displayName: 'Department', fieldType: 'text' },
      { key: 'checked', displayName: 'Checked', fieldType: 'text' },
      { key: 'date', displayName: 'Date', fieldType: 'date' }
    ];

    let settings: tableSettings = {
      menu: { active: true, items: ['edit', 'delete'], inlineEdit: true }
    };

    this.state = {
      Table_Data: tableData,
      Colms_Data: colms,
      Settings: settings
    };

  }

  onMenuItemClicked = (item, index, action) => {
    console.log("item, action", item, action);
    let copyDataArray = [...this.state.Table_Data];
    if(action == 'edit')
    {
      let copyDataItem = {...item};
      //copyDataItem.name = 'Changed';
      copyDataArray[index] = copyDataItem;
      
      
    } else if (action == 'delete') {
      copyDataArray.splice(index, 1);
    }
    this.setState({Table_Data: copyDataArray});
  }

  render() {
    return (
      <div>
        <GenerateTable tableData={this.state.Table_Data} colms={this.state.Colms_Data} settings={this.state.Settings} 
        onMenuItemClicked={this.onMenuItemClicked}/>
      </div>
    );
  }
}

export default MyRequest;