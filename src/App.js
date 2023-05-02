import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Task from './components/Task/Task';
import Addtask from './components/Task/Addtask';
import Deletetask from './components/Task/Deletetask';
import Gift from './components/Gift/Gift';
import Addgift from './components/Gift/Addgift';
import Deletegift from './components/Gift/Deletegift';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
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
