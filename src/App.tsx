import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router';
import { RecoilRoot } from 'recoil';


const router = createBrowserRouter(routes);
function App() {
  return(
  <RecoilRoot>
    <RouterProvider router={router}></RouterProvider>
    </RecoilRoot>)
}

export default App;
