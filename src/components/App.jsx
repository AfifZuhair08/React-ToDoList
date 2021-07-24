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

  // delete item by filtering the array (item)
  // excluding the item that was clicked (id)
  function deleteItem(id){
    // set items / refresh the array
    setItems((prevItems) => {
      // filter previous items & excluding selected items (id)
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      );
    });
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
          {items.map( (todoitem, index) => (
              <ToDoItem
                key={index}
                id={index}
                onChecked={deleteItem}
                text={todoitem}
              />))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
