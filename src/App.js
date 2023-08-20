import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import ProjectOneDetails from './ProjectOneDetails/ProjectOneDetails';
import ProjectTwoDetails from './Components/ProjectTwoDetails/ProjectTwoDetails';
import ProjectThreeDetails from './Components/ProjectThreeDetails/ProjectThreeDetails';
import NavbarDrawer from './Components/NavbarDrawer/NavbarDrawer';


function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/projectOne/details',
          element:<ProjectOneDetails></ProjectOneDetails>
        },
        {
          path:'/projectTwo/details',
          element:<ProjectTwoDetails></ProjectTwoDetails>
        },
        {
          path:'/projectThree/details',
          element:<ProjectThreeDetails></ProjectThreeDetails>
        },
        {
          path:'/dra',
          element:<NavbarDrawer></NavbarDrawer>
        }
      ]
    }

  ]);
  return (
    <div className=''>
       <div class="hero"> 
   
   <div class="cube"></div>
   <div class="cube"></div>
   <div class="cube"></div>
   <div class="cube"></div>
   <div class="cube"></div>
   <div class="cube"></div>
 </div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
