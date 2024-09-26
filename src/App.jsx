import { Suspense } from "react";
import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import {  FavoriteProvider} from "./Context/FavoriteContext";
import './App.scss';
import Favorite from "./Pages/Favorite/Favorite";

export const App = () => {

  return (
    <div>
      <FavoriteProvider>
        <Header />
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </FavoriteProvider>
    </div>
  );
};
export default App;



