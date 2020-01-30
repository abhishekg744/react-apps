import React from 'react';
import './pop-up.scss'

export const PopUp = ({Settings, Data, OnClose, children}) => {

    let inputStyle = {
        width: Settings.width
    }
    console.log(Settings);

    return (<> {Settings.show ? 
    <div className="pop-up-container">
        <div className="pop-up-window" style={inputStyle}>
            <div className="pop-up-heading">
                popup <a className="close" onClick={() => OnClose()}>X</a>
            </div>
            {children}
        </div>
    </div> : ''}</>);
}