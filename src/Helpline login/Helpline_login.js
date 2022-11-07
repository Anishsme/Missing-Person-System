import Header from "../Heading/Heading";
import "./Helpline_login.css";
import Login from "./Login_helpline/Login_helpline"

function Helpline() {
  return (<>
  <Header/>
  <div>
    <br />
  <h3>&nbsp; &nbsp;Ham aapke khoe hue priyajanon ko kojane something something</h3>
  </div>
  
    <div className="help_content">
      {/* Part 1 */}
      <div className="help_faq-pagination-area">
        <div className="help_part-1">
          <div className="head" style={{fontWeight:'400',fontSize:'60px'}}>
            Helpline Login
          </div>
          <br />
          <p style={{fontSize:'30px'}}>the portal for HelpLine Staff to login</p>
        </div>
        <div className="help_part-2">
          <div className="help_content-container">
            <p>IN CASE OF ISSUES DROP A MAIL TO efinder.helpdesk@efinder.in or Call 1800-1800-1800</p>
          </div>
        </div>
      </div>
    {/* Part 2 */}
      <div className="login-area">
      <Login></Login>
      </div>
    </div>
    
  </> );
}

export default Helpline;
