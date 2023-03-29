import { useEffect, useState } from "react";
import instance from "lib/api/axios";
import YouTube from "react-youtube";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: number;
  name: string;
  original_name: string;
  backdrop_path?: string;
  poster_path?: string;
};

type Options = {
  width: string;
  height: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    width: "640",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await instance.get(
        `/movie/${movie.id}/videos?api_key=5927808c5dcf9c9db491fa5372086df8`
      );
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <ul className="hidden-scrollbar mt-7 flex gap-5 overflow-x-scroll pl-7">
        {movies.map((movie: Movie) => (
          <li
            key={movie.id}
            tabIndex={0}
            className=" cursor-pointer duration-500 hover:scale-[1.08]"
          >
            <figure
              className={`${
                isLargeRow
                  ? "w-[165px] [&>img]:h-full"
                  : "h-[calc(9/16*180px)] w-[180px] overflow-hidden"
              }`}
            >
              <img
                src={`${baseUrl}${
                  isLargeRow
                    ? movie.poster_path
                    : movie.backdrop_path ?? movie.poster_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </figure>
          </li>
        ))}
      </ul>
      {trailerUrl && (
        <YouTube className="mt-7" videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
};
