import "./searchitem.css"
import { useNavigate } from "react-router-dom"

const Searchitem = () => {
    const navigate = useNavigate();
  return (
    <div className="searchitem">
<img src="https://th.bing.com/th/id/OIP.DwXY6LUIbMNOoFu1zSvdpQHaE7?w=255&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="siimg"/>
    <div className="sidesc">
        <h1 className="sititle">Tokyo Time Apartments</h1>
        <span className="sidistance">400m from market</span>
        <span className="sitaxiop">Free airport taxi</span>
        <span className="sisubtitle">
Studio Appartment with Air conditioning
        </span>
        <span className="sifeatures">
Entire studio * 1 bathroom * 1 full bed
        </span>
<span className="sicancelop">Free Cancellation</span>
<span className="sicancelopsubtitle">
    You can cancel later , so lock in this great price today!
</span>
    </div>
    <div className="sidetails">
    <div className="sirating">
        <span>Excellent</span>
        <button>8.9</button>
    </div>
<div className="sidetailstexts">
        <span className="siprice">$100</span>
        <span className="sitaxop">Includes taxes and fees</span>
        <button className="sicheckbutton" onClick={() => navigate("/hotels/sad")} >See availability</button>
        </div>
    </div>
    


    </div>
    
  )
}

export default Searchitem