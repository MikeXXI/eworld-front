import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Profil from '../Profil/Profil';
import Home from "./Home";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/liste" element={<List />}/> */}
          <Route path="/profil" element={<Profil />}/>
      </>     
    )
  );

  return <RouterProvider router={router} />;
}
