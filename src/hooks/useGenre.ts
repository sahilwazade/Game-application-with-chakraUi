import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useData<Genre>(
    "https://api.rawg.io/api/genres?key=894f747d6f334185a9fcb4d4365e2921"
  );

export default useGenre;
