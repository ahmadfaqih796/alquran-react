import { useEffect, useState } from "react";
import { GetAllSurah } from "../providers/quran.provider";
import quran from "../assets/image/quran.png";

const Surah = () => {
  const [surah, setSurah] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    GetAllSurah().then((response) => {
      setSurah(response.data.data);
      console.log(response.data.data);
    });
  }, []);

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
    <>
      {surah.length === 0 ? (
        <section class="template loading section-2">
          <span class="loader loader-double"></span>
          Loading...
        </section>
      ) : (
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
              <button onClick={FindSurah}>Cari</button>
            </main>
            <p>{error ? message : ""}</p>
          </article>
          <main className="surah">
            {surah.map((data, index) => (
              <a
                href={"/" + data.name.transliteration.id + "/" + data.number}
                key={index}
              >
                <article>
                  <h2 className="number">{data.number}</h2>
                  <section>
                    <h1>{data.name.short}</h1>
                    <h1>{data.name.transliteration.id}</h1>
                    <p>{data.name.translation.id}</p>
                  </section>
                </article>
              </a>
            ))}
          </main>
        </div>
      )}
    </>
  );
};
export default Surah;
