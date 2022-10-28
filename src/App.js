import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/SideBar/Sidebar';
import Rightbar from './Components/RIghtbar/Rightbar';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <Rightbar></Rightbar>
    </div>
  );
}

export default App;
