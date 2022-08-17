import type { Component } from "solid-js";

import styles from "./App.module.css";
import "tailwindcss/tailwind.css";

import { TodoList } from "./components/TodoList";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <TodoList />
    </div>
  );
};

export default App;
