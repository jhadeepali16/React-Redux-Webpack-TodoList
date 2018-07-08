import React from 'react';
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Footer from "./components/Footer";

// import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)
export default App;
