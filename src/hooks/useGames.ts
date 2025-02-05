import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "https://api.rawg.io/api/games?key=894f747d6f334185a9fcb4d4365e2921",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

// selectedGenre: Genre | null
// { params: { genres: selectedGenre?.id } },
//   [selectedGenre?.id]

// interface FetchGameResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoding] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoding(true);
//     apiClient
//       .get<FetchGameResponse>(
//         "https://api.rawg.io/api/games?key=894f747d6f334185a9fcb4d4365e2921",
//         { signal: controller.signal }
//       )
//       .then((res) => {
//         setGames(res.data.results);
//         setLoding(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoding(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { error, games, loading };
// };

export default useGames;
