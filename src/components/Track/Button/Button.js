import { useState } from "react";


const SelectText= (props) =>{
    const [select, SetSelect] = useState(true);
    const [uri, setUri] = useState("");
    
    const isClick = (e) => {
        SetSelect(false);
        saveClick();
    }
    console.log(select);

    const saveClick = () => {
        if (select==="false"){
            setUri(props.uri)
        }
    
    }

    return (
        <button onClick={()=>{isClick()}}> {select ? "Select" : "Deselect"}</button>
        
    )
}



export default SelectText;