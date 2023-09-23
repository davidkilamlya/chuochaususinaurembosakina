import './App.css';
import Home from './Container/Home/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Gallery from "./components/Gallery/Gallery"
import Aboutus from './components/AboutusPage/Aboutus';
import CollegeApplicationForm from './components/ApplicationPage/ApplicationPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<CollegeApplicationForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
