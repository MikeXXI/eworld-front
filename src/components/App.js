import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Profil from '../Profil/Profil';
import Home from "./Home";
import Login from './Loginpage';
import Register from './Register';
import Task from './Task/Task';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/log" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />}>
          <Route path="/task/:id" element={<Task />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
