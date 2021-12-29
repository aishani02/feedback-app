import FeedbackItem from "./FeedbackItem"
import {motion,AnimatePresence} from "framer-motion"
import Proptypes from "prop-types"
import {useContext} from "react";
import FeedBackContext from "./FeedBackContext"

function FeedbackList() {


     const {feedback}= useContext(FeedBackContext);





      if(!feedback || feedback.length===0){


        return <h1>No FeedBacks Yet</h1>

      }


    return (
        <div>
            

            <AnimatePresence>
             
             <div>

               {feedback.id}
               {feedback.text}
             </div>



            {feedback.map((item)=>{
            return <motion.div     key={item.id} initial ={{opacity:0}}  animate= {{opacity :1}}  exit= {{opacity:0}}>

             <FeedbackItem    key={item.id}  item={item}   />
           
             </motion.div>
           
           
           })}




            </AnimatePresence>

           




        </div>
    )
}

export default FeedbackList
