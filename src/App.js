import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Loginpage';
import Register from './components/Register';
import Task from './components/Task/Task';
import Addtask from './components/Task/Addtask';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />}/>
        <Route path="/task/:id" element={<Task />} />
        <Route path="/task/add" element={<Addtask />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
