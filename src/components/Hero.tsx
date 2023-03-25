import instance from "lib/api/axios";
import { requests } from "lib/api/request";
import { useEffect, useState } from "react";
import { Button } from "./Button";

type movieProps = {
  id?: number;
  name?: string;
  title?: string;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
};

export const Hero = (): JSX.Element => {
  const [movie, setMovie] = useState<movieProps>({});
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const imgSrc = `${baseUrl}${
    movie.poster_path ? movie.poster_path : movie.backdrop_path
  }`;

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.categoryTrending);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomIndex]);
      console.log(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className=" relative block aspect-video w-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-sm">
        <h1 className="text-2xl text-white">
          {movie.name ? movie.name : movie.title}
        </h1>
        <div className="mt-1 flex gap-4">
          <Button text="play" />
          <Button text="My List" />
        </div>
        <p className="mt-4 text-sm text-white">{movie.overview}</p>
      </div>
    </div>
  );
};
