import { useTodos } from '../hooks/useTodos';

export const Title = () => {
  const { pendingTodo } = useTodos();

  return <h1>Todos: {pendingTodo}</h1>;
};
