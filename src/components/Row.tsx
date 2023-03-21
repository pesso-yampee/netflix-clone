// 仕様
// axiosを用いて非同期処理でデータを取得する
// コンテンツは横スクロールができる
// ホバーすると画像が拡大する

import { useEffect, useState } from "react";
import instance from "lib/api/axios";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type movie = {
  id: number;
  name: string;
  original_name: string;
  backdrop_path: string;
  poster_path: string;
};

export const Row = ({ title, fetchUrl }: Props): JSX.Element => {
  const [movies, setMovies] = useState<movie[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <ul className="flex overflow-y-hidden overflow-x-scroll">
        {movies.map((movie: movie) => (
          <li key={movie.id}>
              <img
                className="max-h-24 object-contain"
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};
