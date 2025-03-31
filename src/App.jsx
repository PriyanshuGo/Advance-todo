import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { TaskProvider } from "./contextCreate/TaskContext.jsx";
import Login from "./pages/Login.jsx";
import Todo from "./pages/Todo.jsx";
import AuthGuard from "./components/AuthGuard.jsx";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthGuard><Todo /></AuthGuard>} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

export default App;
