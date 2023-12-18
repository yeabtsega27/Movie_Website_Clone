import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Movie from "./Pages/Movie";
import Shows from "./Pages/Shows";
import Show from "./Pages/Show";
import Search from "./Pages/Search";

function App() {
  return (
    <div className=" w-full  min-h-screen bg-primary text-light ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/search/:value" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
