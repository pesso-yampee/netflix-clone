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
  const imgSrc = `${baseUrl}${movie.backdrop_path ?? movie.poster_path}`;
  const MAX_CHARACTER_LIMIT = 150;

  function addEllipsis(input: string): string {
    const truncatedOverview =
      input.length > MAX_CHARACTER_LIMIT
        ? input.substring(0, MAX_CHARACTER_LIMIT - 1) + "..."
        : input;

    return truncatedOverview;
  }
  const movieOverview = addEllipsis(movie.overview ?? "");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.categoryNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})`, height: "60vh" }}
      className=" relative w-screen pt-36 bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:block before:h-1/4 before:w-full before:bg-gradient-to-b before:from-transparent before:to-black"
    >
      <div className="max-w-sm pl-5">
        <h1 className="text-3xl text-white font-bold">
          {movie.name ? movie.name : movie.title}
        </h1>
        <div className="mt-1 flex gap-4">
          <Button text="Play" />
          <Button text="My List" />
        </div>
        <p className="mt-4 text-sm text-white">{movieOverview}</p>
      </div>
    </div>
  );
};
