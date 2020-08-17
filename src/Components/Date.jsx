import React , {useState} from 'react';

const Date = (props) => {
    let [input,setInput] = useState("")
    const {classIs} = props
      return(
        <td className={`cellWrapper ${classIs}`}>
          <input className={`cell${classIs}`}type="date" value={input} onChange={(e)=>setInput(e.target.value)}/>
          </td>
      )
  }

  export default Date;