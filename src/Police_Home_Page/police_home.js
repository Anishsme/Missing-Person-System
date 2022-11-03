import Header from "../Heading/Heading";
import "./police_home.css"

import Accordian from "./accordian"
function PoliceHome(){
    return(<>
    <Header/>
    <div className="home">
        <div className="accordian-container">
            <br />
            <h2>All Cases</h2>
          <div className="accord-component-container">
            <Accordian></Accordian>
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
                <div><button>View All</button></div>
            </div>
            <div className="request-other-dept">

            </div>
        </div>
    </div>
    </>)
}


export default PoliceHome;