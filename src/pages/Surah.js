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
    <div className="template">
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
