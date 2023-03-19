import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";

import DisplayUser from "./pages/DisplayUser";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Footer from "./layout/Footer";



function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />

            <Routes>
                <Route exact path='/' element={< Home />} />
                <Route exact path='/api/accounts' element={< DisplayUser />} />
                <Route exact path='/Signup' element={< AddUser />} />
                <Route exact path='/editUser/:id' element={< EditUser />} />
                <Route exact path='/view/:id' element={<ViewUser />}/>
            </Routes>
        </Router>

        <Footer/>

    </div>
  );
}

export default App;
