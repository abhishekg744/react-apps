import React from 'react';
import './new-requests.scss';

const NewRequest = ({ match }) => {

  const [inputNameText, changeNameText] = React.useState('D. Roy');
  const [inputDeptText, changeInputText] = React.useState('Finance');
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   changeInputText(event.target.value)
  // }
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
        <label>Upload excel:</label> <input type="file" /> {/*onChange={handleChange} */}
        </div>
        <div className="field-item">
          <button className="load-btn">Load >></button>
        </div> 
      </div>
    </div>
  );
}

export default NewRequest;