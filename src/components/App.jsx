import React, {useState} from "react";
import ToDoItem from "./ToDoItem"

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  
  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
    // add new items into items array from input text
    setItems((prevItems) => {
      return [...prevItems, inputText]
    });

    // set the input to empty after submission
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* DISPLAY ARRAY ITEMS USING MAP FUNCTION*/}
          {items.map( todoitem => 
            <ToDoItem
              text={todoitem}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
