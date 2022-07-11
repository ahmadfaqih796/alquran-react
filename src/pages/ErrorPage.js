import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="template error-page">
      <main className="card">
        <h1>Oops!</h1>
        <br />
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <br />
        <p>Maaf, telah terjadi kesalahan tak terduga.</p>
        <p>
          Silahkan kembali ke halaman{" "}
          <a href="http://localhost:3000/">Beranda</a>
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
