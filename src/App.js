import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./components/Index";
import IndexMain from "./components/IndexMain";
import Post from "./components/Post";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Index/>} />
          <Route path="/IndexMain" exact element={<IndexMain/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
