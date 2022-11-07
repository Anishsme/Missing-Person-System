
import { useState } from "react";
import "./modify.css";
function Modify({data,func}){
    console.log(func)
    console.log(data)
    const [status,setStatus]=useState(null);
    const [clues,setClues]=useState(null);
    const [details,setDetails]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let stats=e.target.value
        
        func(data=>data.map((obj)=>{
            if(obj.Case_ID==='a1'){return {...obj,Status:stats}}
            return obj;
        }))
    //     setStatus(stats)
     }
    return(
        <div className="form-container">
            <h2 >Modify details</h2>
            <form action="">
            <div className="stat">
            <label htmlFor="status_tb">Modify Status</label>
            <input type="text" name="status_tb" id="status_tb" onChange={handleSubmit} value={status}/>
            </div>
            <div className="lead">
            <label htmlFor="clue_tb">Modify Clue</label>
            <input type="text" name="clue_tb" id="clue_tb" />
            </div>
            <div className="details">
            <label htmlFor="details_tb">Modify Details</label>
            <input type="text" name="details_tb" id="details_tb" />
            </div>
            <button className="sub">Submit</button>

            </form>
            
        </div>)
}

export default Modify;