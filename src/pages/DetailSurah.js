import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDetailSurah } from "../providers/quran.provider";
import quran from "../assets/image/quran.png";

const DetailSurah = () => {
  const [surah, setSurah] = useState([]);
  const [ayats, setAyat] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const params = useParams();
  console.log("detail", surah);
  useEffect(() => {
    GetDetailSurah(params.id).then((response) => {
      setSurah(response.data.data);
      setAyat(response.data.data.verses);
    });
  }, [params.id]);

  function FindSurah() {
    if (search === "") {
      setError(true);
      setMessage("Silakan masukkan beberapa teks untuk mencari !");
      return;
    }

    if (window.find) {
      // Firefox, Google Chrome, Safari
      const found = window.find(search);
      setError(false);
      if (!found) {
        setError(true);
        setMessage("Teks berikut tidak ditemukan:\n" + search);
      }
    } else {
      setError(true);
      setMessage("Browser Anda tidak mendukung contoh ini !");
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      FindSurah();
    }
  };

  return (
    <div className="template">
      <article className="brand">
        <h1>Al-Quran Al-Faqih</h1>
        <img className="quran" src={quran} alt={quran} />
        <main className="pencarian">
          <input
            type="text"
            autoFocus
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <button onClick={FindSurah}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </main>
        <p>{error ? message : ""}</p>
      </article>
      {surah && ayats.length >= 1 ? (
        <>
          <div className="ayat-card">
            <h1 className="judul">{params.surah}</h1>
            <p className="justify">{surah.tafsir.id}</p>
            <hr />
            <p className="arab center">{surah.preBismillah.text?.arab}</p>
            {ayats.map((ayat, index) => (
              <div key={index}>
                <hr />
                <article>
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
              </div>
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
