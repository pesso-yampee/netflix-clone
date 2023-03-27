import "index.css";
import { requests } from "lib/api/request";
import { Row } from "components/Row";
import { Hero } from "components/Hero";
import { Header } from "components/Header";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <div className="grid gap-7 pl-5 pb-7">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.categoryNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Top Rated" fetchUrl={requests.categoryTopRated} />
        <Row title="Action Movies" fetchUrl={requests.categoryActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.categoryComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.categoryHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.categoryRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.categoryDocumenttaries} />
      </div>
    </div>
  );
}
