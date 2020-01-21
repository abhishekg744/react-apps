import React, { useState, Component, useEffect } from 'react';
import { convertFirebaseResultToArray } from '../helpers/functions';
import GenerateTable from '../helpers/generate-data-table/generate-data-table';
import { tableColSettings, tableSettings } from '../helpers/generate-data-table/table';
import { connect, useDispatch } from 'react-redux';
import { ChangeLoadingState } from '../action';

const Office = () => {    
    const  dispatch = useDispatch();
    const [offices, setOffices] = useState([]);
    let colms: tableColSettings[] = [
        { displayName: 'ID', fieldType:'text', key:'id'},
        { displayName: 'Name', fieldType:'text', key:'name'},
        { displayName: 'Place', fieldType:'text', key:'place'},
    ]

    let settings:tableSettings ={
        menu: {active: true, items:['edit', 'view']}
    } 

    const onMenuItemClicked = (rowData, tableIndex, menuType) => {

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
            ), 5000);
    }, []);

    return (
        <div>
            <GenerateTable tableData={offices} colms={colms} settings={settings} onMenuItemClicked={onMenuItemClicked}/>
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