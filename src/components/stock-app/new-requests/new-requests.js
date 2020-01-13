import React from 'react';
import './new-requests.scss';
import XLSX from 'xlsx'

const NewRequest = ({ match }) => {

  const [inputNameText, changeNameText] = React.useState('D. Roy');
  const [inputDeptText, changeInputText] = React.useState('Finance');
  const [excelData, changeExcelData] = React.useState([]);
  
  const handleUpload = (e) => {
    e.preventDefault();

    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        changeExcelData(dataParse);
    };
    reader.readAsBinaryString(f)
}


  return (
    <div className="new-request-container">
      <div className="conatiner-1">
        <div className="field-item">
          <label>Name :</label> <input type="text" defaultValue={inputNameText} /> {/*onChange={handleChange} */}
        </div> 
        <div className="field-item">
          <label>Department :</label> <input type="text" defaultValue={inputDeptText} />
        </div>
      </div>
      <div className="conatiner-1">
        <div className="field-item">
        <label>Upload excel:</label> <input type="file" onChange={handleUpload}/> {/*onChange={handleChange} */}
        </div>
        <div className="field-item">
          <button className="load-btn" >Load >></button>
        </div> 
      </div>
      <div>
        <table className="excel-data">
          <thead>
            <tr>
              {excelData.length ? excelData[0].map((item,index) => <th key={index}>{item}</th>): ''}
            </tr>
            {excelData.length ? excelData.map((item,index) => {
              if(index >0) {
                return <tr key={index}>
                  {item.map((data,index) => <td key={index}>{data}</td>)}
                </tr>
              }
                })
            : ''}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default NewRequest;