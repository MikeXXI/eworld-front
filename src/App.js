import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import Task from './components/Task/Task';
import Gift from './components/Gift/Gift';
import ProfilePage from "./components/Profil";
import Inscriptionpage from "./components/inscriptionpage";
import Loginpage from "./components/loginpage";
import Dashboard from "./components/Dashboard";
import Logout from "./components/logout";
import Friends from "./components/Friend/Friends";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/inscription" element={<Inscriptionpage />} />
        <Route path="/connexion" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/friends" element={<Friends />}>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
