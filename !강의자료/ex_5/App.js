import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";

const SERVER_URL = 'http://localhost:4000/api/todo'

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData= async()=>{
    const response = await axios.get(SERVER_URL)
    setTodoList(response.data)
    console.log("fetched");
  }
  useEffect(() => {
    fetchData();
  }, [])

  const deleteData= async(e)=>{
    //const response = await axios.get(SERVER_URL)
    //const newres=(response.data.filter(res=>res.id!=e.target.id));
    const removeid=e.target.id;
    const data = await axios.delete(SERVER_URL, {data: {removeid}});
    console.log(data);
    fetchData();
  }

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    const text=e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, {text, done});
    fetchData();
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" type="text"/>
        <input name="done" type="checkbox"/>
        <input value="추가" type="submit"/>
      </form>
      {todoList.map((todo)=>(
        <div id={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
          <button id={todo.id} onClick={deleteData}>삭제</button>

        </div>
      ))}
    </div>
  );
}

export default App;