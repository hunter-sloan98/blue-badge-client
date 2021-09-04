
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Auth from './components/auth/Auth';
import Sitebar from './components/home/Navbar'

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

//Updating our token
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken);
    console.log(newToken);//this is the key that is display in console and in the application dev tool
  }

//Clearing our token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
  return (
    <div className="App">
      <Sitebar />
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
