"use client";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {
  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }

  return (
    <main className={styles.main}>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>

        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="What needs to be done?"
            ref={todoText}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    </main>
  );
}
