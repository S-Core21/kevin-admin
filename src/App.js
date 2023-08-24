import BlogForm from './components/BlogForms/BlogForm';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Protected from './pages/Protected';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {

  const [signedIn, setSignedin] = useState()
  const [loginData, setloginData] = useState()
  
 const updateLog = (newValue) =>{
  setSignedin(newValue)
 }

 const data = localStorage.getItem('data')

useEffect(()=>{
  setloginData(JSON.parse(data)) 
  console.log(loginData)
}, [data])
  


  return (
    <BrowserRouter>
      <>
      <Routes>
      <Route path='/login' element={<Login updateLog = {updateLog} />} />
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<BlogForm />} />
          <Route path='/create-blog' element={<BlogForm />} />
          {/* <Route path='/blogs' element={<BlogForm/>} /> */}
        </Route>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/login' element={<Login updateLog = {updateLog} />} />
      </Routes>
        {/* <Dashboard /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
