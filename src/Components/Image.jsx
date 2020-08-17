import React , {useState, useEffect} from 'react';

const Image = (props) => {
    let [ownerFlag,setOwnerFlag] = useState(true)

    useEffect (()=>{
        const {url} = props

    },[])
    const toggleImg = () => {
        setOwnerFlag(!ownerFlag)
    }
    const {classIs} = props
      return(
        <td className={`cellWrapper ${classIs}`}>
          <img onClick={()=>toggleImg()} src={ownerFlag?"Images/owner.png":"Images/notowner.png"} height="30px" width="30px"></img>
          </td>
      )
  }

  export default Image;