import React , {useState,useEffect,useRef} from 'react';


const ToolTipSeletor = (props) => {
    let [input,setInput] = useState("");
    let [liElements,setLiElements] = useState([])
    const wrapperRef = useRef(null)

    useEffect(()=>{
        const {list} = props
        let elements = []
        elements = list.map((item)=> {
            return(<li>
                <div className="liElement" onClick={()=>props.changeValue(item)}>{item}</div>
            </li>)
        })
        setLiElements(elements)
    },[])
    const useOutsideAlerter =(ref)=> {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.changeFlag()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapperRef)
    

    const {classIs} = props
      return(<>
          {props.ttFlag && 
       <div ref={wrapperRef} className="ttWrapper">
           <ul className="ttListWrapper">
               {liElements}
           </ul>
       </div>
    }
       </>
      )
  }

  export default ToolTipSeletor;
 