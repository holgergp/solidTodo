import { Todo } from "./TodoList";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const itemClass = props.todo.done ? "line-through" : "underline";
  return (
    <div
      class={itemClass}
      onClick={() => {
        props.toggleTodo(props.todo);
      }}
    >
      {props.todo.text}
    </div>
  );
};
