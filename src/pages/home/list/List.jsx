import "./list.css"
import Navbar from '../../../components/navbar/Navbar'
import Header from '../../../components/navbar/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import Searchitem from "../../../components/searchitem/Searchitem"



const List = () => {

  const location = useLocation();
  const [destination , setdestination] = useState(location.state.destination)
  const [opendate , setopendate] = useState(false)
  const [date , setdate] = useState(location.state.date)
  const [options, setoptions] = useState(location.state.options)


  return (
    <div><Navbar/>
    <Header type="list"/>
    <div className="listcontainer">
      <div className="listwrapper">
        <div className="listsearch">
          <h1 className="listtitle">Search</h1>
          <div className="listitem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="listitem">
            <label>Check-in-date</label>
            <span onClick={()=> setopendate(!opendate) }>
            {`${format(date[0].startDate, "MM/dd/yyyy")} to 
       ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
         { opendate && <DateRange onChange={(item) => setdate([item.selection])}  
          minDate={new Date}
          ranges={date}
          />}
          </div>
          <div className="listitem">
            <label>Options</label>
            <div className="lsoptions">
            <div className="lsoptionitem">
              <span className="lsoptiontext">
                Min price <small>per night</small>
              </span>
              <input type="number" className="lsoptioninput" />
            </div>
            <div className="lsoptionitem">
              <span className="lsoptiontext">
                Max price <small>per night</small>
              </span>
              <input type="number" className="lsoptioninput" />
            </div>
            <div className="lsoptionitem">
              <span className="lsoptiontext">
                Adult
              </span>
              <input type="number" min={1} className="lsoptioninput" placeholder={options.adult} />
            </div>
            <div className="lsoptionitem">
              <span className="lsoptiontext">
                Children
              </span>
              <input type="number" min={0} className="lsoptioninput" placeholder={options.children} />
              
            </div>
            <div className="lsoptionitem">
              <span className="lsoptiontext">
                Room
              </span>
              <input type="number" min={1} className="lsoptioninput" placeholder={options.room} />
            </div>
          </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listresult">
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>


        </div>
      </div>
    </div>
    
    </div>
  )
}

export default List