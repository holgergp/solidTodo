import { createSignal, For } from "solid-js";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { DeleteTodo } from "./DeleteTodo";

export interface Todo {
  text: string;
  done: boolean;
  id: string;
}

export const TodoList = () => {
  const [items, setItems] = createSignal<Todo[]>([]);
  const addTodo = (item: Todo) => {
    setItems([...items(), item]);
  };

  const toggleTodo = (item: Todo) => {
    setItems(
      items().map((todo) => {
        if (todo.id === item.id) {
          return {
            text: item.text,
            done: !item.done,
            id: item.id,
          };
        } else return todo;
      })
    );
  };

  const deleteTodo = (item: Todo) => {
    setItems(items().filter((todo) => todo.id !== item.id));
  };
  return (
    <div class="grid justify-center">
      <div>
        <h1 class="text-2xl pb-2 pt-2 font-bold">Todo-Listde </h1>
      </div>

      <div class="grid gap-y-1 grid-cols-[300px_50px]">
        <For each={items()} fallback={<div>Nichts zu tun...</div>}>
          {(item) => {
            return (
              <>
                <TodoItem todo={item} toggleTodo={toggleTodo} />
                <DeleteTodo deleteTodo={deleteTodo} todo={item} />
              </>
            );
          }}
        </For>
        <div class={"col-span-2"}>
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};
