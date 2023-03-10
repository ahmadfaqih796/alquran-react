import { useState } from "react";

const SearchText = (field) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  if (field === "") {
    setError(true);
    setMessage("Silakan masukkan beberapa teks untuk mencari !");
    return;
  }

  if (window.find) {
    // Firefox, Google Chrome, Safari
    const found = window.find(field);
    setError(false);
    if (!found) {
      setError(true);
      setMessage("Teks berikut tidak ditemukan:\n" + field);
    }
  } else {
    setError(true);
    setMessage("Browser Anda tidak mendukung contoh ini !");
  }
  return {
    error,
    message,
  };
};

export default SearchText;
