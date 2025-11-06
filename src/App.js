import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router";
import LandingPage from './components/LandingPage'
import CheckWeather from "./components/CheckWeather";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/check-weather" element={<CheckWeather/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
                <Route path="/" element={<Navbar footer={true}/>}>
                    <Route path="/signup" element={<RegisterPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
