import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [items,setItems]=useState([])
  useEffect(()=>(
      fetch("http://localhost:4000/questions")
      .then(res=>res.json())
      .then(data=>setItems(data))
  ),[])
  function handleDelete(deletedItem){
    setItems(items.filter((item)=>(
        item.id!==deletedItem.id
    )))
  }
  function handleAddItem(addedItem){
    setItems([...items,addedItem])
  }
  function handleUpdateItem(UpdateItem){
    const updatedItems=items.map(item=>{
        if(UpdateItem.id===item.id){
            return UpdateItem
        }else{
            return item
        }
    })
    setItems(updatedItems)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddItem={handleAddItem}/> : 
      <QuestionList items={items} onDelete={handleDelete} onUpdateItem={handleUpdateItem}/>}
    </main>
  );
}


export default App;
