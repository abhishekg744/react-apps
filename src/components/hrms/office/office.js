import React, { useState, Component, useEffect, useRef } from 'react';
import { convertFirebaseResultToArray } from '../helpers/functions';
import GenerateTable from '../helpers/generate-data-table/generate-data-table';
import { tableColSettings, tableSettings } from '../helpers/generate-data-table/table';
import { connect, useDispatch } from 'react-redux';
import { ChangeLoadingState } from '../action';
import { PopUp } from '../helpers/pop-up/pop-up';

const Office = () => {
    const dispatch = useDispatch();
    const [offices, setOffices] = useState([]);
    const inputRef = useRef();
    const [popUpSettings, changeSettings] = useState({show: false, width: '30%'});
    let colms: tableColSettings[] = [
        { displayName: 'ID', fieldType: 'text', key: 'id' },
        { displayName: 'Name', fieldType: 'text', key: 'name' },
        { displayName: 'Place', fieldType: 'text', key: 'place' },
    ]

    let settings: tableSettings = {
        menu: { active: true, items: ['edit', 'view'] }
    }

    const onMenuItemClicked = (rowData, tableIndex, menuType) => {
        console.log(rowData, tableIndex, menuType);
        changeSettings( prev => {
         return  { ...prev,show:true}
        });
    }

    const Close = () => {
        changeSettings( prev => {
            return  { ...prev,show:false}
           });
    }

    const change = () => {
        console.log(inputRef);
    }

    useEffect(() => {
        dispatch(ChangeLoadingState(true));
        setTimeout(() =>
            fetch("https://test-6da3b.firebaseio.com/test/Office.json")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        let data = convertFirebaseResultToArray(result);
                        console.log(data);
                        setOffices(prev => [...prev, ...data]);
                        dispatch(ChangeLoadingState(false));
                    },
                    (error) => {
                        console.log(error);
                    }
                ), 1000);
    }, []);

    return (
        <div>
            <input type='text' ref={inputRef} onChange={change}/>
            <GenerateTable tableData={offices} colms={colms} settings={settings} onMenuItemClicked={onMenuItemClicked} />
            <PopUp Settings={popUpSettings}  OnClose={Close}>
                <div>
                    <input type='text' ref={inputRef} onChange={change}/>
                </div>
            </PopUp>
        </div>
    );

};

// class Office extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             offices: []
//         }
//     }

//     componentDidMount() {
//         fetch("https://test-6da3b.firebaseio.com/test/Office.json")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     console.log(result);
//                     let data = convertFirebaseResultToArray(result);
//                     console.log(data);

//                     this.setState({ offices: data });
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     console.log(error);
//                 }
//             );
//     }

//     render() {
//         return (
//             <div>
//                 Office
//                 {this.state.offices.length ? this.state.offices[0].name : ''}
//             </div>
//         );
//     }
// }

export default Office;