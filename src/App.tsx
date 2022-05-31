import { Route, Routes } from "react-router-dom";
import { Layout } from "./common/Layout/Layout";
import { TodosPage } from "./pages/TodosPage/TodosPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<TodosPage />} />
          <Route path="/auth" element={<div></div>} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
