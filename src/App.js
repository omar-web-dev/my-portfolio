import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home';
import ErrorPage from './Component/ErrorPage';
import Service from './Component/Service';
import Contact from './Component/Contact';
import About from './Component/About';
import SingIn from './Component/SingIn';
import SingUp from './Component/SingUp';
import Experience from './Component/Experience';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      children : [
        {path : '/', element : <Home/>},
        {path : 'home', element : <Home/>},
        {path : 'service', element : <Service/>},
        {path : 'experience', element : <Experience/>},
        {path : 'contact', element : <Contact/>},
        {path : 'about', element : <About/>},
        {path : 'sign-in', element : <SingIn/>},
        {path : 'sign-up', element : <SingUp />},
      ],
      errorElement :<ErrorPage/>,
    }
  ])
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
