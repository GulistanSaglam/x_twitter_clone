import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { auth } from './firebase';

import { login, logout } from './feature/userSlice';
import { selectUser } from './feature/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="general_app">
      {!user ? (<Login />)
        : (
          <div className='app__background'>
            <div className="app">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
