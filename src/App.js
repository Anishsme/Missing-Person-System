import Header from "./Heading/Heading";
import "./index.css";
import Login from "./Login/Login"
import Image_Slider from "./Image_Slider/image_slider";
function App() {
  return (<>
  <Header/>
  <div>
    <br />
  <h3>&nbsp; &nbsp;Ham aapke khoe hue priyajanon ko kojane something something</h3>
  </div>
  
    <div className="content">
      {/* Part 1 */}
      <div className="faq-pagination-area">
        <div className="pagination-area">
          {/* Add the image slider here */}
          <Image_Slider></Image_Slider>
          <div className="other-button-area">
            <button>Collaborating NGO(s)</button>
            <button>Collaboration Opportunity</button>
            <button>Helpline Login</button>
            <button>Official Login</button>
          </div>
        </div>
        <div className="faq-area">
         
          <h1>FAQs</h1>
          <div className="line"></div>
          <div className="faq-content">
            <div className="system-works">
              How This System Works ?
            </div>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio deserunt ducimus sint adipisci eos necessitatibus quam, tenetur dolor est alias, delectus dolorum? Velit perferendis ad ab corporis tempora deserunt quisquam consequuntur quos laboriosam delectus voluptatem doloremque, sequi, minima perspiciatis culpa accusantium. Laudantium ut ipsam itaque rem saepe, dolores, dolorum vero similique expedita officia vel accusamus commodi molestiae assumenda repellat autem laborum, incidunt facilis iure porro quidem sit repellendus dicta sunt! 
            </p>
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

export default App;
