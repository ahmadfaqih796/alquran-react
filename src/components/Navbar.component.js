import "../assets/css/navigasi.css";
import "../assets/css/sidebar.css";
export const Navigasi = () => {
  return (
    <>
      <main className="tampilan">
        <aside className="sidebar-kiri"></aside>
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
        <aside className="sidebar-kanan"></aside>
      </main>
    </>
  );
};
