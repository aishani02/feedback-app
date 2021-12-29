import Card from "./Card"

import { useEffect } from "react";
import { useState } from "react"
import Button from "./Button";
import RatingSelected from "./RatingSelected";
import {useContext} from "react";
import FeedBackContext from "./FeedBackContext";
function Form() {
const {handleInsert,edit,addEdit} = useContext(FeedBackContext)

 const [text,setText]= useState("")
 const [disable,setDisable]=useState(true)
 const [message,setMessage]=useState("")
const [Rating,setRating] =useState(10);


useEffect(()=>{

    setDisable(false);
    setText(edit.item.text)
  
    
    
    },[edit])

function onchange(event){






setText(event.target.value)
if(text=='')
{
    setDisable(true)
    setMessage(null)
}
else if(text!=''  &&  text.length<=8)
{
    setDisable(true)
    setMessage("The text should be atleast of 8 characters")
}else{
    setDisable(false)
    setMessage(null)
}





}
function handleSubmit(event){



    event.preventDefault();

if(text.trim().length > 8){

    var newFeedBack={
        text :text ,
        rating : Rating
      }
//Edit Insert 
   if(edit.edit==true){
     

    addEdit(edit.item.id,newFeedBack)

   

   }
else{


   handleInsert(newFeedBack)
}
}







}




   return (
        <Card>
        <form   onSubmit={handleSubmit} >
        <h1>How Would You Rate Our Services ? </h1>
        <RatingSelected select = {(rating)=>{ 
            console.log(rating)
             setRating(rating)}}/>
        <div className="input-group">

         <input value={text} onChange={onchange} type="text" placeholder="Write Something"/>
         <Button type="submit"  isDisable={disable} >Send</Button>
            
        </div>


        </form>    

        <div className="message">{message}</div>

            
        </Card>
    )
}

export default Form