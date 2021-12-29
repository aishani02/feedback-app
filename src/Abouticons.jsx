import {FaQuestion} from "react-icons/fa"
import { Link } from "react-router-dom"
function Abouticons() {
    return (
        <div className="about-link">
        <Link to={{
            pathname:"/about",
            search:"query",
            hash:"aishani"
        }}>
        < FaQuestion />
        </Link>
           
        </div>

    )
}

export default Abouticons
