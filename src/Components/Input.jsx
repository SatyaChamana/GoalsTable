import React , {useState} from 'react';

const Input = (props) => {
    
    let [input,setInput] = useState(props.defaultValue)
    const {classIs} = props


    const checkType = (evt) => {
        evt = (evt) ? evt : window.event;
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
    }
      return(
        <td className={`cellWrapper ${classIs}`}>
          <input 
            placeholder={props.placeHolder?props.placeHolder:""} 
            className={`cell${classIs}`}
            type={props.type?props.type:"text"} 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            
            />
          </td>
      )
  }

  export default Input;