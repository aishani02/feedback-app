import {useContext} from "react";
import FeedBackContext from "./FeedBackContext";



function FeedbackStat() {

const {feedback} =  useContext(FeedBackContext)
var Average =feedback.reduce((acc,curr)=>{
    acc=acc+curr.rating;
    return acc;

},0)/feedback.length;


    return (
        <div  className="feedback-stats">
            <h1>{feedback.length}</h1>
            <h1>Averge Rating : {isNaN(Average)?0:Average}</h1>
        </div>
    )
}

export default FeedbackStat
