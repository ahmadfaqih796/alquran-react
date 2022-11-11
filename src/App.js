import { useEffect, useState } from "react";
import "./App.css";
import { GetAllSurah } from "./providers/quran.provider";
function App() {
	const [surah, setSurah] = useState([]);

	useEffect(() => {
		GetAllSurah().then((response) => {
			setSurah(response.data.data)
			console.log(response.data.data)
		})
	}, []);
  return (
    <>
      <table>
          <thead>
            <tr>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {surah.map((data, index) => (
              <tr key={index}>
                <td>{data.number}</td>
								<td>{data.name.transliteration.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  );
}
export default App;
