import axios from "axios";
import { BASE_URL } from "./helper.provider";

export const GetAllSurah = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + "/surah")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const GetDetailSurah = (noSurah) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + `/surah/${noSurah}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
