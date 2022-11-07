import "./accordian.css"
import {useState} from 'react'
// import Modify from "../Modify_form/modify";
function Accordian({visible,data}){
  
    console.log(data)
    console.log(visible)
    const [selected,setSelected]=useState(null);
    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i);
    }
    return(
    <div className="accordian-wrapper">
    <div className="accordian">
       
        {data.map((item,i)=>{
             return(
             <div className="item">
            <div className="title" onClick={()=>toggle(i)}>
                <h1>{item.Case_ID}</h1>
                <span>{selected==i?'-':'+'}</span>
            </div>
            <div className={selected==i?"accordian_content show":"accordian_content"}>
                <h3>Status:-</h3>{item.Status}
                <h3>Clues:-</h3>{item.Clues}
                <h3>Details:-</h3>{item.Details}
                <br />
                <button onClick={visible} className="mod_button">Modify</button>
               
            </div>
             </div>)
        })}
    </div>
</div>)
}

export default Accordian;