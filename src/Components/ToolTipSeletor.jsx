import React , {useState,useEffect,useRef} from 'react';
import ToolTip from './ToolTip';

const ToolTipSeletor = (props) => {
    
    let [input,setInput] = useState("");
    let [ttFlag,setTtFlag] = useState(false);
    let [ttValue,setTtValue] = useState("CLick Here")
    const {classIs} = props

    const changeValue = (val) => {
        setTtValue(val)
        setTtFlag(false)
    }

    const changeFlag = (val) => {
        setTtFlag(false)
    }

   
      return(
          <td>
           <div  className={classIs+"ttCell"} onClick={()=>setTtFlag(!ttFlag)}> {ttValue}</div>
            
            { <ToolTip ttFlag={ttFlag} changeValue={changeValue}  changeFlag={changeFlag} list={props.list}/>}
       </td>
      )
  }

  export default ToolTipSeletor;

  