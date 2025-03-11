import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import task from '../assets/taskk.gif';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
  {!isLoggedIn ? (
    <div className='flex justify-between bg-[#0a0c3d] items-center p-20 min-h-full'>
      <div>
      <h1 className='text-3xl text-white font-semibold mt-8 mx-8 '>
        Plan your day easily with <br /> Task Manager
      </h1>
      <Link
        to="/signup"
        className="mt-6 inline-flex items-center text-lg md:text-xl text-[#0a0c3d] bg-white px-10 py-3 rounded-md shadow-lg hover:shadow-xl transition-all hover:space-x-3"
      >
        <span className="transition-all">Join now to manage your tasks</span>
        <span className="ml-3 transition-all">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </Link>
      </div>
      <div>
        <img src={task} alt="" />
      </div>
    </div>
  ) : (
    <>
      <h1 className="text-xl font-semibold mt-8 mx-8 border-b border-gray-300 pb-2">
        Welcome {authState.user.name}
      </h1>
      <Tasks />
    </>
  )}
</MainLayout>

    </>
  )
}

export default Home