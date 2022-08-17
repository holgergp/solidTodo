import { createSignal } from "solid-js";
import { Todo } from "./TodoList";

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

export const AddTodo = (props: AddTodoProps) => {
  const [input, setInput] = createSignal("");

  return (
    <input
      class={"rounded border-2"}
      value={input()}
      placeholder={"Was ist zu tun?"}
      onKeyDown={(event) => {
        if (event && event.currentTarget && event.currentTarget.value) {
          setInput(event.currentTarget.value);
          if (event.key === "Enter") {
            props.addTodo({
              text: event.currentTarget.value,
              done: false,
              id: Date.now() + "",
            });
            setInput("");
          }
        }
      }}
    />
  );
};
