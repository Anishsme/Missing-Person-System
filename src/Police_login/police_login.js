import Header from "../Heading/Heading";
import "./police_login.css";
import Login from "./Login_helpline/police_login_form"

function PoliceLogin() {
  return (<>
  <Header/>
  <div>
    <br />
  {/* <h3>&nbsp; &nbsp;Ham aapke khoe hue priyajanon ko kojane something something</h3> */}
  </div>
  
    <div className="content">
      {/* Part 1 */}
      <div className="faq-pagination-area">
        <div className="part-1">
          <div className="head" style={{fontWeight:'400',fontSize:'60px'}}>
          NGOs,Police and Other Departments Login
          </div>
          <br />
          <p style={{fontSize:'30px'}}>the portal for other departments of government and police stations</p>
        </div>
        
        <div className="part-2">
        <br />
          <div className="content-container">
            <p>IN CASE OF ISSUES DROP A MAIL TO efinder.helpdesk@efinder.in or Call 1800-1800-1800</p>
          </div>
          <h6>For NGOs department name is NGO</h6>
        </div>
      </div>
    {/* Part 2 */}
      <div className="login-area">
      <Login></Login>
      </div>
    </div>
    
  </> );
}

export default PoliceLogin;
