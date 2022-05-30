import { useAppSelector } from "./hooks/reduxHooks";
import ITodo from "./types/todo";

function App() {
  const todos: ITodo[] = useAppSelector((state) => state.todos);

  return <div className="App">{JSON.stringify(todos)}</div>;
}

export default App;
