
import FeedbackList from "./FeedbackList";
import Header from "./Header"
import AboutPage from "./AboutPage";
import { BrowserRouter as  Router,Route,Routes,Link , NavLink } from "react-router-dom";
import "./index.css"
import Card from "./Card";
import items from "./data.js"
import React , { useState } from "react";
import FeedbackStat from "./FeedbackStat";
import Form from "./Form"
import Abouticons from "./Abouticons";
import Post from "./Post";

import FeedBackContext, {FeedBackProvider} from "./FeedBackContext"
function App() {








  return ( 
    
  <FeedBackProvider>
   <Router>  
  

  <Header    color="#b02f5f" bgColor="#131423"   />
 
  <div className="container">
  <Routes>


  <Route exact path="/" element={
<>
<Form   />
  <FeedbackStat  />
  <FeedbackList     />
  <a href="/about">Go to About</a>
  </>
}/>

  
 
   
  <Route path="/about" element={<AboutPage/>}/>  
  <Route path="/post/:id/:name" element={<Post/>} />
  </Routes>
<Card>

<NavLink to="/" activeClassName="active" >Home</NavLink>
<NavLink to="/about">About</NavLink>
</Card>

  <Abouticons />



  </div>
  






</Router>

</FeedBackProvider>
  );
}

export default App;
