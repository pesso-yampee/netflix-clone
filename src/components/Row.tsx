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

export const Row = ({ title, fetchUrl, isLargeRow }: Props): JSX.Element => {
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
      <h2 className="font-serif text-2xl text-white">{title}</h2>
      <ul className="flex gap-4 overflow-y-hidden overflow-x-scroll pt-4 pl-6">
        {movies.map((movie: movie) => (
          <li key={movie.id}>
            <figure className={isLargeRow ? "w-64" : "w-20"}>
              <img
                style={{ maxWidth: "initial", width: "100%" }}
                src={`${baseUrl}${movie.poster_path}`}
                alt={movie.name}
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};
