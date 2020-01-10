import React, { useState, Component } from 'react';
import GenerateTable from '../helpers/generate-data-table/generate-data-table';

class MyRequest extends Component {
  constructor(props) {
    super(props);

    let tableData = [
      {name:'d.Roy', department: 'finanace', checked: true, date: new Date() },
      {name:'D K Bos', department: 'finanace1', checked: true, date: new Date() },
      {name:'Jonny', department: 'finanace2', checked: true, date: new Date() },
      {name:'Ram', department: 'finanace3', checked: true, date: new Date() },
      {name:'Sham D', department: 'finanace4', checked: true, date: new Date() },
    ]
  
    let colms = [
      {key:'name', displayName:'Name', fieldType: 'text'},
      {key:'department', displayName:'Department', fieldType: 'text'},
      {key:'checked', displayName:'Checked', fieldType: 'text'},
      {key:'date', displayName:'Date', fieldType: 'date'}
    ];
  
    this.state ={
      Table_Data: tableData,
      Colms_Data :colms
    };
  
  }
  
 change = () => {
    
   //changeData([...Table_Data, {name:'qwyeqt D', department: 'finanace4', checked: true, date: new Date() }])

   //changeData(Table_Data.map(item => item.name = "asd"));
   let data = this.state.Table_Data;
   data[0].name = "sad";
   this.setState({
     Table_Data: data
   })
 
  }
  render() {
    return (
        <div>
          <GenerateTable tableData={this.state.Table_Data} colms = {this.state.Colms_Data}/>
          <button onClick={this.change}>changeData</button>
        </div>
    );
  }
}

export default MyRequest;