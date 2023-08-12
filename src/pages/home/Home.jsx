import Featured from "../../components/featured/Featured";
import Featuredproperty from "../../components/featuredproperties/Featuredproperty";
import Footer from "../../components/footer/Footer";
import Maillist from "../../components/maillist/Maillist";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/navbar/header/Header"
import Propertylist from "../../components/propertylist/Propertylist";
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
          <Featured/>
<h1 className="hometitle"> Browse by property type </h1>
<Propertylist/> 
<h1 className="hometitle"> Home guests love </h1>
<Featuredproperty/>
<Maillist/>
  <Footer/>
        </div>
    </div>
  );
};

export default Home