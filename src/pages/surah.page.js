import { useEffect, useState } from "react";
import { Navigasi } from "../components/Navbar.component";
import { GetAllSurah } from "../providers/quran.provider";

export const Surah = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    GetAllSurah().then((response) => {
      setSurah(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  return (
    <>
      <Navigasi />
      <main className="flex">
        <div className="card">
          <h1>Al-Fatihah</h1>
          <h1>Surah : 1</h1>
          <h1>Juz : 1</h1>
          <h1>Madinah</h1>
        </div>
        <div className="card">
          <h1>Al-Fatihah</h1>
          <h1>Surah : 1</h1>
          <h1>Juz : 1</h1>
          <h1>Madinah</h1>
        </div>
      </main>
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
              <td>
                <a
                  href={"/" + data.name.transliteration.id + "/" + data.number}
                >
                  {data.name.transliteration.id}
                </a>
              </td>
              <td>{data.name.transliteration.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
