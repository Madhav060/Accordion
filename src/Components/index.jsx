import React,{useState} from 'react'
import './style.css'
import data from './data'

function Accord() {
    const [id,setId] = useState(null)
    const [mulval,setMul] = useState([]);
    const [isMul,setIs] = useState(false);
    const handfun = (code) =>
        {    if(id===code)
            setId(null)
            else
            setId(code);   }

     
  return (
    <div>
          <div>
          <button onClick={()=>setIs(!isMul)}>Multi</button>

        {data.map((data) => (    
      <div className='component' key={data.id} onClick={()=> handfun(data.id)}>
        <div className='card'> 
        <li>{data.question}</li>
        <span>+</span> 
      </div>
        {(id===data.id)?(<p>{data.answer}</p>):(<></>)}
    </div>
   ))}
          </div>
    </div>
  )
}

export default Accord