import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDetailSurah } from "../providers/quran.provider";

const DetailSurah = () => {
  const [surah, setSurah] = useState([]);
  const [ayats, setAyat] = useState([]);
  const params = useParams();
  console.log("xxxxxx", surah);
  useEffect(() => {
    GetDetailSurah(params.id).then((response) => {
      setSurah(response.data.data);
      setAyat(response.data.data.verses);
      console.log(response.data.data);
    });
  }, [params.id]);

  return (
    <div className="template">
      {surah && ayats.length >= 1 ? (
        <>
          <h1>detail</h1>
          <h1>{surah.number}</h1>
          <h1>{surah.numberOfVerses}</h1>
          <p>{surah.tafsir.id}</p>
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
      ) : (
        <>
          <div className="skeleton skeleton-text"></div>
        </>
      )}
    </div>
  );
};
export default DetailSurah;
