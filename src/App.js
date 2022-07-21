
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/css/skeleton.css"
import { ROUTER } from "./router";
function App() {
  
  return (
    <RouterProvider router={ROUTER} />
  );
}
export default App;
