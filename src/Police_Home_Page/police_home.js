import Header from "../Heading/Heading";
import "./police_home.css"
import { useState } from "react"; 
import Accordian from "./accordian"
import Modify from "../Modify_form/modify";
function PoliceHome(){
    const [data,setData]=useState([
        {Case_ID:"a1",Status:"open",Clues:"fsdsdfsd",Details:"fdfdfsdfdfsdf"},
        {Case_ID:"a2",Status:"open",Clues:"fsdsdfsd",Details:"fdfdfsdfdfsdf"},
        {Case_ID:"a3",Status:"open",Clues:"fsdsdfsd",Details:"fdfdfsdfdfsdf"},
        {Case_ID:"a4",Status:"open",Clues:"fsdsdfsd",Details:"fdfdfsdfdfsdf"},
        {Case_ID:"a5",Status:"open",Clues:"fsdsdfsd",Details:"fdfdfsdfdfsdf"}
    ]);

    // function changeData(s,c,d){
    //     setData(data.status=s);
    //     setData(data.)
    // }
    let ind;
    const [visible,setVisible]=useState(false)
    function changeState(){
        
        setVisible(visible=>!visible)
        // ind=ix;
        // console.log(visible)
       
    }
    return(<>
    <Header/>
    <div className="home">
        <div className="accordian-container">
            <br />
            <h2>All Cases</h2>
          <div className="accord-component-container">
            <Accordian visible={changeState} data={data}></Accordian>
          </div>
        </div>
        <div className="other">
            <div className="clue-other-dept">
                <br />
                <h3 >Case Clues from Other Departments</h3>
                <div className="clue">
                    <h3>Case:101AKA001</h3>
                    <h4>Report: investigation at ab block,person found to live in   room 503</h4>
                </div>
                <div><button className="view">View All</button></div>
            </div>
            <div className="request-other-dept">
            <br />
                <h3 >Investigation from other departments from Other Departments</h3>
                <div className="clue">
                    <h3>Case:101AKA001</h3>
                    <h4>Report: investigation at ab block,person found to live in   room 503</h4>
                </div>
                <div><button className="view">View All</button></div>
            </div>
        </div>
        {visible && <Modify data={data} func={setData}></Modify>}
        {/* {console.log(visible)} */}
        {/* {<Modify></Modify>} */}
    </div>
    </>)
}


export default PoliceHome;