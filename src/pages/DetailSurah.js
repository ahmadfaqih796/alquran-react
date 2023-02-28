import "../assets/css/root.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDetailSurah } from "../providers/quran.provider";

const DetailSurah = () => {
  const [surah, setSurah] = useState([]);
  const [ayats, setAyat] = useState([]);
  const [tafsir, setTafsir] = useState("");
  const params = useParams();
  console.log(params);
  useEffect(() => {
    GetDetailSurah(params.id).then((response) => {
      setSurah(response.data.data);
      setTafsir(response.data.data.tafsir.id);
      setAyat(response.data.data.verses);
      console.log(response.data.data);
    });
  }, [params.id]);
  return (
    <>
      <h1>detail</h1>
      <h1>{surah.number}</h1>
      <h1>{surah.numberOfVerses}</h1>
      <p>{tafsir}</p>
      {ayats.map((ayat, index) => (
        <ul key={index}>
          <li>{ayat.number.inSurah}</li>
          <li className="arab">{ayat.text.arab}</li>
          <li>{ayat.translation.id}</li>
          <li>
            <audio controls>
              <source src={ayat.audio.secondary[0]} type="audio/mpeg" />
            </audio>
          </li>
        </ul>
      ))}
    </>
  );
};
export default DetailSurah;
