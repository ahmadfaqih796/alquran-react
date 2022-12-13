import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigasi } from "./components/Navbar.component";
import Aasas from "./pages/aaa";
import Dashboarda from "./pages/dasboard";
import { DetailSurah } from "./pages/detail.page";
import { Surah } from "./pages/surah.page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/uwu/" element={<Navigasi />}>
          <Route path="messages" element={<Aasas />} />
          <Route path="tasks" element={<Dashboarda />} />
        </Route>
        <Route index element={<Surah />} />
        <Route path="/:surah/:id" element={<DetailSurah />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
