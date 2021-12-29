import  PropTypes from "prop-types";


function Card({children , reverse}){



    const style ={backgroundColor:   reverse? "rgba(0,0,0,0.4)" : "#fff" ,
    color: reverse ? "#fff" : "rgba(0,0,0,0.4)" }
    const className=`card ${reverse && "reverse"} `            

return (
<div   className = {className}>
  
  {children}

</div>
)


} 






Card.propTypes={

children : PropTypes.node,
reverse : PropTypes.bool

}



export default Card;