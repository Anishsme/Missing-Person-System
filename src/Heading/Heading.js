import "./Heading.css"
function Header(){
    return(<>
    <div className="header">
        <div className="area1">
        <div className="emblem">
            <img src="https://w7.pngwing.com/pngs/141/687/png-transparent-lion-capital-of-ashoka-sarnath-state-emblem-of-india-national-symbols-of-india-government-of-india-symbol-miscellaneous-mammal-text.png" alt="" width={"50px"} height={"50px"}/>
        </div>
        <div className="Heading"><h1>Indian Police Service(ISP)</h1></div>
        </div>
        {/* E-finder */}
        <div className="area2">
            e-Finder
        </div>
    </div>
    </>)
}
export default Header;