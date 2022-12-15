import {HashRouter} from "react-router-dom";
import "./App.css";
import { Navigasi } from "./components/Navbar.component";
import Dashboarda from "./pages/dasboard";
import { DetailSurah } from "./pages/detail.page";
import { Surah } from "./pages/surah.page";
import GetRouter from "./router";
function App() {
  return (
    <HashRouter>
			<GetRouter />
		</HashRouter>
  );
}
export default App;
