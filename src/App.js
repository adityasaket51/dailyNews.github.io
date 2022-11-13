import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = ()=> {
  const pageSize = 5;
  const apiKey = "cd6f557c05a74344aa8ed2c7e562746b"
 
    return (
      <div>
        <Router>
          <NavBar/> 
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
            <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
            <Route path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
            <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
            <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route> 
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;