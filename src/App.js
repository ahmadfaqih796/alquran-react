import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailSurah } from "./pages/detail.page";
import { Surah } from "./pages/surah.page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Surah />} />
        <Route path="/:surah/:id" element={<DetailSurah />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
