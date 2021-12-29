
import Card from "./Card"


function AboutPage() {
    return (
       <Card reverse={false}>
       <div >
        <h1> About </h1>
        <p>This is a Feedback App created by Aishani-Souryadeep</p>
        
        <a href="/">Click to Go Back Home</a>
        <br />
        <small>v 1.0.0.0</small>
       </div>
       </Card>
    )
}

export default AboutPage
