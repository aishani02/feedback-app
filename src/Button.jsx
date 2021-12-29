
import Proptypes from "prop-types"


function Button({children,type,version,isDisable}) {
    return (
     <button  type={type} disabled={isDisable} className={`btn btn-${version}`} >
         {children}
     </button>
    )
}
Button.defaultProps={
    type:"button",
    disabled:false,
    version:"primary"

}
Button.propTypes={
    children:Proptypes.node.isRequired,
    disabled:Proptypes.bool,
    version:Proptypes.string,
    type:Proptypes.string

}
export default Button
