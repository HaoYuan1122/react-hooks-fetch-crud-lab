import React, { useState } from "react";

function QuestionItem({ question,onDelete,onUpdateItem }) {
  const { id, prompt, answers, correctIndex } = question;
//   const [correctIndexDefault,setCorrectIndex]=useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(()=>onDelete(question))
  }

  function changeCorrectAnswer(e){
    const setCorrectIndex=e.target.value
    fetch(`http://localhost:4000/questions/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            correctIndex:setCorrectIndex
        })
    })
    .then(res=>res.json())
    .then(updatedIndex=>onUpdateItem(updatedIndex))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onClick={changeCorrectAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
