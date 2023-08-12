import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import Maillist from "../../components/maillist/Maillist"
import Footer from "../../components/footer/Footer"
import Header from "../../components/navbar/header/Header"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { set } from "date-fns"


const Hotel = () => {

  const [slidenumber, setslidenumber] = useState(0);
  const [open, setopen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src: "https://th.bing.com/th/id/OIP.3H1UuLYWiwGkx-2b0qXJJwHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.24rlK_S_481DhEsTfpWIAAHaE7?w=294&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.ha5vjISRX0hwT7qI0lkDKwHaFj?w=182&h=136&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
];

const handleopen = (i)=>{
  setslidenumber(i);
  setopen(true);
};



const handlemove = (direction) => {
  let newslidenumber;

  if (direction ==="l"){
    newslidenumber = slidenumber === 0 ? 5 : slidenumber - 1;
  }

  else{
    newslidenumber = slidenumber === 5 ? 0 : slidenumber + 1;
  }
  
  setslidenumber(newslidenumber)
}
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelcontainer">
        {open && <div className="slider">
  <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setopen(false)} />
  <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handlemove("l") } />
  <div className="sliderwrapper">
    <img src={photos[slidenumber].src} alt="" className="sliderimg" />
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handlemove("r") } />
        </div>}
        <div className="hotelwrapper">
        <button className="booknow">Reserve or book now!</button>
          <h1 className="hoteltitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Steward St 123 New York</span>
          </div>
          <span className="hoteldistance">
            Excellent location 500m from center
          </span>
          <span className="hotelpricehighlight">
            Book a stay over $70 at this property and get a free airport taxi
          </span>
          <div className="hotelimages">
{photos.map((photo,i)=>(
  <div className="hotelimgwrapper">
    <img onClick={()=>handleopen(i)} src={photo.src} alt="" className="hotelimg" />
  </div>
))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailstexts">
              <h1 className="hoteltitle">Stay in the heart of Coloumbia</h1>
              <p className="hoteldesc">
Located a 5-minute walk from St. Steward gate in Coloumbia , Tower street apartments has accomodations with air conditioning and free wifi.
The large windows flood the space with natural light, creating a bright and airy atmosphere.
The kitchens are a chef's dream, equipped with top-of-the-line stainless steel appliances, quartz countertops, and ample storage space.
Retreat to the spacious bedrooms, designed to be your personal sanctuary. 
With plush carpeting, generous closet space, and large windows offering city views, you'll find comfort and tranquility in every corner. 
The bathrooms are beautifully appointed with sleek fixtures, luxurious finishes, and indulgent soaking tubs or glass-enclosed showers.
              </p>
            </div>
            <div className="hoteldetailsprice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Coloumbia , this property has an excellent location with score of 9.8!
              </span>
              <h2>
                <b>$245</b>(9 nights)
              </h2>
              <button>Reserve or book now!</button>
            </div>

          </div>
        </div>
        <Maillist/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel