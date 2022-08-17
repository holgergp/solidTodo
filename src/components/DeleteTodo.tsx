import { Todo } from "./TodoList";

interface DeleteTodoProps {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
}

export const DeleteTodo = (props: DeleteTodoProps) => {
  return (
    <div onClick={() => props.deleteTodo(props.todo)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width={2}
      >
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
};
