import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home';
import Erorr from './Component/Erorr';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Main/>,
      children : [
        {path : '/', element : <Home/>},
        {path : 'home', element : <Home/>},
      ],
      errorElement :<Erorr/>,
    }
  ])
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
