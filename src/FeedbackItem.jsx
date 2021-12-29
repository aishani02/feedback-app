import Card from "./Card"
import Proptypes from "prop-types"
import {FaTimes} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import {useContext} from "react"
import FeedBackContext from "./FeedBackContext"


function FeedbackItem({item}) {
    


const {handleDelete,handleEdit} = useContext(FeedBackContext)

 function handleClick(id){
        handleDelete(id);

 }

    return (
        <Card reverse={false}>

        


        <div className='num-display'>{item.rating}</div>
       <button className="close"   onClick={()=> handleClick(item.id)}>
     
        <FaTimes color="purple"/>

       </button>
        <button className="edit">
            <FaEdit color="purple" onClick={()=>{
                handleEdit(item)
            }}/>
        </button>

        <div className='text-display'>{item.text}</div>
        




        </Card>
    )
}
FeedbackItem.propTypes={

    rating:Proptypes.number ,
    text:Proptypes.string
}
export default FeedbackItem
