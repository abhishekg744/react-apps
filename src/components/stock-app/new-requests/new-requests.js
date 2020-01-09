import React from 'react';
import './new-requests.scss';

const NewRequest = ({match}) => {

  const [inputText, changeInputText] = React.useState('asd');
  const handleChange = (event) => {
    console.log(event.target.value);
    changeInputText(event.target.value)
  }
    return (
        <div>
          <input type="text" value={inputText} onChange={handleChange}/>
        </div>
    );
}

export default NewRequest;