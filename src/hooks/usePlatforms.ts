import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData<Platform>(
    "https://api.rawg.io/api/platforms/lists/parents?key=894f747d6f334185a9fcb4d4365e2921"
  );

export default usePlatforms;
