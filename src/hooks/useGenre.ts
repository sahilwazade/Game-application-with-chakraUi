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

// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenre = () => {
//   const [genre, setGenre] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoding] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoding(true);
//     apiClient
//       .get<FetchGenreResponse>(
//         "https://api.rawg.io/api/genres?key=894f747d6f334185a9fcb4d4365e2921",
//         { signal: controller.signal }
//       )
//       .then((res) => {
//         setGenre(res.data.results);
//         setLoding(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoding(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { error, genre, loading };
// };

export default useGenre;
