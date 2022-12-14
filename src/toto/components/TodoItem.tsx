// import { useContext } from 'react';
// import { TodoContext } from '../context/TodoContext';

import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  //   const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  return (
    <li
      onDoubleClick={() => toggleTodo(todo.id)}
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
    >
      {todo.desc}
    </li>
  );
};
