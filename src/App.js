import BlogForm from './components/BlogForms/BlogForm';
// import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import ViewBlogs from './pages/ViewBlogs/ViewBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import BlogEdit from './pages/BlogEdit/BlogEdit';
import ViewUsers from './components/ViewUsers/ViewUsers';
import ViewProfile from './components/ViewProfile/ViewProfile';
import Videos from './pages/Videos/Videos';
import Main from './pages/main/Main';
import AddVideos from './pages/AddVideos/AddVideos';
import VideoEdit from './components/VideoEdit/VideoEdit';
import Newsletter from './pages/Newsletter/Newsletter';

function App() {

  // const [signedIn, setSignedin] = useState()
  // const [loginData, setloginData] = useState()

  // const updateLog = (newValue) => {
  //   setSignedin(newValue)
  // }

  // const data = localStorage.getItem('data')

  // useEffect(() => {
  //   setloginData(JSON.parse(data))
  //   console.log(loginData)
  // }, [data])



  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<Main />} />
            <Route path='/create-blog' element={<BlogForm />} />
            <Route path='/blogs' element={<ViewBlogs />} />
            <Route path='/add-user' element={<SignUp />} />
            <Route path='/blog-edit' element={<BlogEdit />} />
            <Route path='/view-users' element={<ViewUsers />} />
            <Route path='/profile' element={<ViewProfile />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/add-videos' element={<AddVideos />} />
            <Route path='/edit-videos' element={<VideoEdit />} />
            <Route path='/newsletter' element={<Newsletter />} />
          </Route>
            <Route path='/add' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* <Dashboard /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
