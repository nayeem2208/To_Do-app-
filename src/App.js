import React, { useState } from "react";
import "./App.css";

function App() {
  let weeks=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let weekofday=new Date().getDay()
  let today=weeks[weekofday]
  
  let [toDos, setTodos] = useState([]);
  let [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕ </h2>

      </div>
      <div className="input">
        <input
          value={toDo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            {
              setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
              setTodo('')
            }
           
            
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    console.log(e.target.value)
                    console.log(value)
                    setTodos(
                      toDos.filter((obj) => {
                        if (obj.id == value.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  name=""
                  id=""
                  value={value.status}
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{
                  setTodos(
                    toDos.filter((obj)=>{
                      if(obj.id!=value.id){
                        return obj
                      }
                    })
                  )
                }}></i>
              </div>
            </div>
          );
        })}
        <h4>completed task </h4>
        {toDos.map((value) => {
          if (value.status) {
            return (<><ul><li><h5>{value.text}</h5></li></ul></>)
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
