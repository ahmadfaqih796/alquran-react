import "../assets/css/navigasi.css";
export const Navigasi = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#!">Qur'an</a>
          </li>
          <li>
            <a href="#!">Hadits</a>
          </li>
        </ul>
        <main className="pencarian">
          <input type="text" placeholder="cari surah" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </main>
      </nav>
    </>
  );
};
