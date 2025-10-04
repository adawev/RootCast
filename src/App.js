import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router";
import LandingPage from './components/LandingPage'

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route path="/" element={<LandingPage/>}/>
                    </Route>
                </Routes>

        </div>
    );
}

export default App;
