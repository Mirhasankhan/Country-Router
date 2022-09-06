import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Nomatch from './Components/Nomatch/Nomatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/country/:countryDetail" element={<CountryDetail/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Nomatch/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
