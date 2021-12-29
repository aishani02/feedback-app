import {createContext,useState} from "react"
import {v4 as uuidv4} from "uuid";
import items from "./data.js"



const FeedBackContext=createContext();


export const FeedBackProvider = ({children})=>{

const [edit,setEdit]=useState({
  item : {},
  edit :false
})

    
function handleDelete(id)
{

if(window.confirm("Are Yoy sure you want to delete this item?")){
    setFeedBack(feedback.filter((item)=>{
      return item.id!==id;
    }))
   }

}
function handleEdit(item){




setEdit({
  item,edit:true
})


console.log(edit)
}
function handleInsert(item){


 item.id =  uuidv4(); 

 console.log(item);
 setFeedBack([item,...feedback])


}
    
const [feedback,setFeedBack]=useState(items)



const addEdit =(id,updateItem)=>{


  setFeedBack(feedback.map((item)=>{
   
    return item.id===id?{...item,...updateItem}:item


  }))


}



return <FeedBackContext.Provider  value={{feedback,handleInsert,handleDelete,handleEdit,edit,addEdit
}}>
{children}

</FeedBackContext.Provider>

}


export default FeedBackContext;




