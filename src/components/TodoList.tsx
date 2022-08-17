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
    const updatedItems = items().slice();
    updatedItems.push(item);
    setItems(updatedItems);
  };

  const toggleTodo = (item: Todo) => {
    const itemIndex = items().findIndex((todo) => todo.text === item.text);
    const updatedItems = items().slice();
    updatedItems.splice(itemIndex, 1, {
      text: item.text,
      done: !item.done,
      id: item.id,
    });
    setItems(updatedItems);
  };

  const deleteTodo = (item: Todo) => {
    const itemIndex = items().findIndex((todo) => todo.text === item.text);
    const updatedItems = items().slice();
    updatedItems.splice(itemIndex, 1);
    setItems(updatedItems);
  };
  return (
    <div class="grid justify-center">
      <div>
        <h1 class="text-2xl pb-2 pt-2 font-bold">Todo-Liste </h1>
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
