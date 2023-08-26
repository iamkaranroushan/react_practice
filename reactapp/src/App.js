import './App.css';
import Navbar from './navbar';
import Home from './home';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Blogdetails';
import LastPage from './Lastpage';





function App() {
  return (
    <Router>  

      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>

            <Route exact path = "/" element = {<Home/>}></Route>
            <Route exact path = "/create" element = {<Create/>}></Route>
            <Route exact path = "/blogs/:id" element =  {<BlogDetails/>} ></Route>
            <Route exact path = "*" element =  {<LastPage/>} ></Route>            

          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
