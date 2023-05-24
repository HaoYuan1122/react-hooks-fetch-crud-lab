import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({items,onDelete,onUpdateItem}) {
    
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
        items.map((item)=><QuestionItem 
        key={item.id}
        question={item}
        onDelete={onDelete}
        onUpdateItem={onUpdateItem}
        />)
        }
        </ul>
    </section>
  );
}

export default QuestionList;
