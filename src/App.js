import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Task from './components/Task/Task';
import Addtask from './components/Task/Addtask';
import Gift from './components/Gift/Gift';
import Addgift from './components/Gift/Addgift';
import ProfilePage from "./components/Profil";
import Inscriptionpage from "./components/Register";
import Loginpage from "./components/loginpage";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />}/>
        <Route path="/task/add" element={<Addtask />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gift/add" element={<Addgift />} />
          <Route path="/Profil" element={<ProfilePage />} />
          <Route path="/Inscription" element={<Inscriptionpage />} />
          <Route path="/Connexion" element={<Loginpage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
