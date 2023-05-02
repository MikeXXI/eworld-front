import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
<<<<<<< Updated upstream
// import Login from './components/Loginpage';
// import Register from './components/Register';
=======
import Register from './components/Register';
>>>>>>> Stashed changes
import Task from './components/Task/Task';
import Addtask from './components/Task/Addtask';
import Deletetask from './components/Task/Deletetask';
import Gift from './components/Gift/Gift';
import Addgift from './components/Gift/Addgift';
import Deletegift from './components/Gift/Deletegift';
import LoginForm from "./components/formconnexion";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
<<<<<<< Updated upstream
        <Route path="/" element={<Home />} />
        {/* <Route path="/log" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
=======
          <Route path="/connexion" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
>>>>>>> Stashed changes
        <Route path="/task" element={<Task />}/>
        <Route path="/task/add" element={<Addtask />} />
        <Route path="/task/delete/:taskId" element={<Deletetask />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gift/add" element={<Addgift />} />
        <Route path="/gift/delete/:giftId" element={<Deletegift />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
