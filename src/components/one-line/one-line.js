import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTableLineAction, saveTableLineAction } from "../../actions";

function OneLine(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [key, setKey] = useState("");
    const [readonly, setReadonly] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        setName(props.oneLineData.data.name)
        setSurname(props.oneLineData.data.surname)
        setKey(props.oneLineData.data.key)
    },[]);

    const handleName = (e) => {
        setName(e.target.value)
    };
    const handleSurname = (e) => {
        setSurname(e.target.value)
    };
    const handleKey = (e) => {
        setKey(e.target.value)
    };
    const handleReadonly = () => {
        setReadonly(!readonly)
    };

    const handleEditLine = () => {
        dispatch(saveTableLineAction.request({data:{name, surname, key, id: props.oneLineData._id}}) )
        setReadonly(!readonly)
    }

    const handleDeleteLine = () => {
        dispatch(deleteTableLineAction.request({id: props.id}))
    }

    return (
        <>
            {props.oneLineData.data?.name ? <tr>
            <td><input value={name} readOnly={readonly ? "" : "readonly"} onChange={handleName}/></td>
            <td><input value={surname} readOnly={readonly ? "" : "readonly"}  onChange={handleSurname}/></td>
            <td><input value={key} readOnly={readonly ? "" : "readonly"}  onChange={handleKey}/></td>
            <td>
                {readonly ? <button className="waves-effect waves-light btn" onClick={handleEditLine}>Save</button>
                    : <button className="waves-effect waves-light btn" onClick={handleReadonly}>Edit</button>}
                <button className="waves-effect waves-light btn red" onClick={handleDeleteLine}>Delete</button>
            </td>
        </tr> : null }
        </>
    )
}

export default OneLine;
