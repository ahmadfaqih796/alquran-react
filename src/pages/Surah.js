import { useEffect, useState } from "react";
import { GetAllSurah } from "../providers/quran.provider";

const Surah = () => {
  const [surah, setSurah] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetAllSurah().then((response) => {
      setSurah(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  function FindNext() {
    if (search === "") {
      alert("Please enter some text to search!");
      return;
    }

    if (window.find) {
      // Firefox, Google Chrome, Safari
      const found = window.find(search);
      if (!found) {
        alert("The following text was not found:\n" + search);
      }
    } else {
      alert("Your browser does not support this example!");
    }
  }
  return (
    <div className="template">
      <main>
      <input
            type="text"
            autoFocus
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button onClick={FindNext}>
            sasss
          </button>
      </main>
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
  );
};
export default Surah;
