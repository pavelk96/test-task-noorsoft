import OneLine from "../one-line/one-line";
import "./table.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTableLineAction, getTableDataAction } from "../../actions";

function Table() {
    const dispatch = useDispatch();
    const dataTable = useSelector(state => state.dataTable)
    const isLoadingTableData = useSelector(state => state.isLoadingTableData)
    const [addLine, setAddLine] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [key, setKey] = useState("");

    useEffect(() =>{
        dispatch(getTableDataAction.request())
    },[])

    const handleAddLine = () => {
        setAddLine(!addLine)
    }

    const handleName = (e) => {
        setName(e.target.value)
    };
    const handleSurname = (e) => {
        setSurname(e.target.value)
    };
    const handleKey = (e) => {
        setKey(e.target.value)
    };

    const handleSaveLine = () => {
        dispatch(addTableLineAction.request({data:{name, surname, key}}))
        setAddLine(!addLine)
        setName("")
        setSurname("")
        setKey("")
    }

    return (
        <div>
                {isLoadingTableData ? <h1>Loading...</h1> :
                    <table className="striped table">
                        {addLine ? <>
                            <button className="waves-effect waves-light btn" onClick={handleSaveLine}>Save</button>
                            <button className="waves-effect waves-light btn red" onClick={handleAddLine}>Cancel</button>
                            </> : <button className="waves-effect waves-light btn" onClick={handleAddLine}>add line</button>}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Key</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {addLine ? <>
                        <td><input placeholder="Name" value={name} onChange={handleName}/></td>
                        <td><input placeholder="Surname" value={surname} onChange={handleSurname}/></td>
                        <td><input placeholder="Key" value={key} onChange={handleKey} /></td>
                    </> : null}
                    {   dataTable.map((oneLineData, idx) =>
                        <OneLine oneLineData={oneLineData}
                                 key={idx}
                                 id={oneLineData._id}/>)}
                    </tbody>

                    </table>
                }
        </div>
    )
}

export default Table;
