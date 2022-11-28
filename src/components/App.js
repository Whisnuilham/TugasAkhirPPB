import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from "./pages/LandingPage";
// Components
import Header from "./components/Header";
import "./App.css";
import ChampionPageV60 from "./pages/ChampionPageV60";
import ChampionPageAeropress from "./pages/ChampionPageAeropress";
import DetailPage from "./pages/DetailPage";
function App() {
return (
<div className="App">
<Header />
<Router>
<Routes>
<Route exact path="/" element={<LandingPage/>} />
<Route exact path="/ChampionPageV60" element={<ChampionPageV60/>} />
<Route exact path="/ChampionPageAeropress" element={<ChampionPageAeropress/>} />
<Route exact path="/DetailPage" element={<DetailPage/>} />
</Routes>
</Router>
<Header />
</div>
);
}
export default App;