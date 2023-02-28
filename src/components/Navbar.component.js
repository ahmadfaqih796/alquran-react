import "../assets/css/navigasi.css";
import "../assets/css/sidebar.css";
export const Navigasi = () => {
  return (
    <>
      <main className="tampilan">
        <aside className="sidebar-kiri"></aside>
        <div className="aaa">
          <nav>
            <ul>
              <li>
                <a href="#">Qur'an</a>
              </li>
              <li>
                <a href="#">Hadits</a>
              </li>
            </ul>
            <main className="pencarian">
              <input type="text" placeholder="cari surah" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </main>
          </nav>
          <article className="konten">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              dignissimos praesentium maxime, consequatur impedit obcaecati vero
              accusamus vel atque nobis eum officiis doloremque illo sapiente,
              quaerat ullam aut voluptate ducimus.
            </p>
          </article>
        </div>
        <aside className="sidebar-kanan"></aside>
      </main>
    </>
  );
};
