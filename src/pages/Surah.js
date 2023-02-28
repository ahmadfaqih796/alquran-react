import { useEffect, useState } from "react";
import { GetAllSurah } from "../providers/quran.provider";

const Surah = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    GetAllSurah().then((response) => {
      setSurah(response.data.data);
      console.log(response.data.data);
    });
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
export default Surah;
