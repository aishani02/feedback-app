import propTypes from 'prop-types'
import "./index.css"



function Header({text,color,bgColor}) {




    return (
        <header  style= {{color: color , backgroundColor: bgColor}}   >
            {text }   
        </header>
    )
}


console.log(Header.propTypes);

Header.defaultProps ={

text : "FeedBack UI",
color: "red",
bgColor :  "blue"


}
Header.propTypes ={


    text : propTypes.string
    
    }


export default Header

