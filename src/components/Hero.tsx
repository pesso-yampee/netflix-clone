import hero from "assets/media/images/hero.jpg";
import instance from "lib/api/axios";
import { requests } from "lib/api/request";
import { useEffect, useState } from "react";

type movieProps = {
  id?: number;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  poster_path?: string;
};


export const Hero = (): JSX.Element => {
  const [movie, setMovie] = useState<movieProps>({});
  const baseUrl = "https://image.tmdb.org/t/p/original";
  
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.categoryTrending);
      const randomIndex = Math.floor(Math.random() * request.data.results.length -1);
      setMovie(request.data.results[randomIndex]);
      console.log(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className=" relative">
      <img src={`${baseUrl + movie.poster_path}`} alt="" />
    </div>
  );
}
