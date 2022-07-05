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
          <div className="ayat-card">
            {ayats.map((ayat, index) => (
              <>
                <hr />
                <article key={index}>
                  <h2 className="number">{ayat.number.inSurah}</h2>
                  <section>
                    <p className="arab">{ayat.text.arab}</p>
                    <p>{ayat.translation.id}</p>
                  </section>
                  {/* <li>
                <audio controls>
                  <source src={ayat.audio.secondary[0]} type="audio/mpeg" />
                </audio>
              </li> */}
                </article>
              </>
            ))}
          </div>
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
