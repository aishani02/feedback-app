import { useState } from "react"

import {useContext,useEffect} from "react";
import FeedBackContext from "./FeedBackContext";


function RatingSelected({select}) {

    const [selected,setSelected]=useState(10)
    const { edit} = useContext(FeedBackContext)
    useEffect(()=>{
    setSelected(edit.item.rating)
},[edit])




function handleChage(event){


    console.log(+event.currentTarget.value)
setSelected(+event.currentTarget.value);
select(+event.currentTarget.value)


}


    return (
       
        <ul className="rating">
        <li>
        <input type="radio" name="rating" id="1" value={1} checked={selected===1} onChange={handleChage}   />
        
        <label htmlFor="1">1</label>
        
        
        </li>
        <li>
        <input type="radio"  name="rating" id="2" value={2} checked={selected===2} onChange={handleChage}   />
        <label htmlFor="2">2</label>
        </li>
        <li>
        <input type="radio"  id="3" name="rating" value={3} checked={selected===3} onChange={handleChage}   />
        <label htmlFor="3">3</label>
        </li>
        <li>
        <input type="radio" name="rating" id="4" value={4} checked={selected===4} onChange={handleChage}   />
        <label htmlFor="4">4</label>
        </li>
        <li>
        <input type="radio" name="rating" id="5" value={5} checked={selected===5} onChange={handleChage}   />
        <label htmlFor="5">5</label>
        </li>
        <li>
        <input type="radio" name="rating" id="6" value={6} checked={selected===6} onChange={handleChage}   />
        
        <label htmlFor="6">6</label>
        </li>
        <li>
        <input type="radio" name="rating" id="7" value={7} checked={selected===7} onChange={handleChage}   />
        <label htmlFor="7">7</label>
        </li>
        <li>
        <input type="radio" name="rating" id="8" value={8} checked={selected===8} onChange={handleChage}   />
        <label htmlFor="8">8</label>
        </li>
        <li>
        <input type="radio" name="rating" id="9" value={9} checked={selected===9} onChange={handleChage}   />
        <label htmlFor="9">9</label>
        </li>
        <li>
        <input type="radio" name="rating" id="10" value={10} checked={selected===10} onChange={handleChage}   />
        <label htmlFor="10">10</label>
        </li>
        </ul>
      
    )
}

export default RatingSelected
