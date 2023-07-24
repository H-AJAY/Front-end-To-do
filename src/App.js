import {BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";
import { UpdateTodo } from "./components/updateTodo";

function App() {
  return (
      <BrowserRouter>
 <div className="app-contents">
  <Routes>
      <Route exact path="/" element={<ShowTodoList/>} />
      <Route path="/create-todo" element={<CreateTodo/>} />
      <Route path="/update-todo" element={<UpdateTodo/>} />

  </Routes> 
      </div>
      </BrowserRouter>
  );
}
export default App;
