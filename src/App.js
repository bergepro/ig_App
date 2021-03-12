import './App.css';
import logo from "./mortenlogo.png";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      
      <div className="app__header">
        <img
         className="app__headerImage"src={logo}alt=""/>
      </div>
      
      <Post />

      {/* Posts */}

      {/* Header */}
    </div>
  );
}

export default App;
