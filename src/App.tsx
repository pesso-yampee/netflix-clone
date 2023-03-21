import "index.css";
import { requests } from "lib/api/request";
import { Row } from "components/Row";
export default function App(): JSX.Element {
  return (
    <>
      <Row title="Top Rated" fetchUrl={requests.categoryTopRated} />
    </>
  );
}
