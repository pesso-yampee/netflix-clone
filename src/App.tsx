import "index.css";
import { requests } from "lib/api/request";
import { Row } from "components/Row";
import { Hero } from "components/Hero";
export default function App(): JSX.Element {
  return (
    <>
      <Hero />
      <div className="bg-black">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.categoryNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Top Movies" fetchUrl={requests.categoryTopRated} />
        <Row title="Action Movies" fetchUrl={requests.categoryActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.categoryComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.categoryHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.categoryRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.categoryDocumenttaries} />
      </div>
    </>
  );
}
