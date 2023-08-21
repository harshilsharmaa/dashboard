import './App.css';
import React, {useEffect} from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {useSelector, useDispatch} from 'react-redux';
import {setUpAuthObserver} from './utils/userSlice';

import { Outlet, createBrowserRouter } from 'react-router-dom';


function App() {

  const {currentUser, loading} = useSelector((store)=>store.user);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(setUpAuthObserver());
  },[])


  return (
    <>
    {
      loading?<h1>Loading...</h1>:
      currentUser?<Outlet />:<Login />
    }
    </>    
    
    );
  }

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
    ]
  }
])



export default appRouter;
  
  // <Login/>