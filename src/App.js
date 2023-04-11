import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Profil from './Profil/Profil';
import Index from './Index/Index';


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path="/" element={<Index />}/>
          {/* <Route path="/liste" element={<List />}/> */}
          <Route path="/profil" element={<Profil />}/>
      </>     
    )
  );

  return <RouterProvider router={router} />;
}
