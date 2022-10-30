import "./Login.css";

function Login(){
    return(<>
    <div className="login-form">
        <h1 className="label">
        e-Finder
        </h1>
        <h5>an initiative of Goverment of India and Indian Police Service(IPS) </h5>
        <div className="textboxes">
            <div className="name">
                <label htmlFor="name"><h3>Name</h3></label>
                <input type="text" name="" id="name" />
            </div>
            <div className="password">
            <h3>Password</h3>
                <input type="password" name="" id="" />
            </div>
            <div className="email">
            <h3>Email-ID/Phone number</h3>
                <input type="email" name="" id="" />
            </div>
            <div className="button-area">
            <button className="login">LOG IN</button>
            <button className="sign-up">SIGN UP</button>
        </div>
        </div>
       
    </div>
    </>)
}

export default Login;