import "./police_login_form.css";

function Login(){
    return(<>
    <div className="login-form">
        <div>
        <h1 className="label">
        e-Finder
        </h1>
        <h5>an initiative of Goverment of India and Indian Police Service(IPS) </h5>
        </div>
        <div className="textboxes">
            <div className="name">
                <label htmlFor="name"><h3>Department Name</h3></label>
                <input type="text" name="" id="name" />
            </div>
            <div className="name">
                <label htmlFor="name"><h3>Department ID/NGO ID</h3></label>
                <input type="text" name="" id="name" />
            </div>
            <div className="name">
                <label htmlFor="name"><h3>Operator ID</h3></label>
                <input type="text" name="" id="name" />
            </div>
            <div className="password">
            <h3>Password</h3>
                <input type="password" name="" id="" />
            </div>
            <div className="district">
            <h3>District name</h3>
                <input type="text" name="" id="" />
            </div>
          
            <div className="bracnh">
            <h3>Branch/NGO name</h3>
                <input type="email" name="" id="" />
            </div>
            
            <div className="button-area">
            <button className="login">LOG IN</button>
           
        </div>
        </div>
      
       
    </div>
    </>)
}

export default Login;