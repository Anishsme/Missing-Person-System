import Header from "./Heading/Heading";
import "./index.css";
import Login from "./Login/Login"
function App() {
  return (<>
  <Header/>
  <div>
  <h3>Ham aapke khoe hue priyajanon ko kojane something something</h3>
  </div>
  
    <div className="content">
      {/* Part 1 */}
      <div className="faq-pagination-area">
        <div className="pagination-area"></div>
        <div className="faq-area"></div>
      </div>
    {/* Part 2 */}
      <div className="login-area">
      <Login></Login>
      </div>
    </div>
    
  </> );
}

export default App;
