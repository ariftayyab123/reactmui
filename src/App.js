 
import './index.css';
import Login from './Components/LoginPage/Login';
import NavBar from './Components/Headers/NavBar';
import LoginHeader from './Components/Headers/LoginHeader';
function App() {
  return (
    <div>
        {/* //<NavBar/> */}
        <LoginHeader/>
        <Login/>
    </div>
  );
}

export default App;
